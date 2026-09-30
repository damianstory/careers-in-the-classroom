#!/usr/bin/env python3
"""Rebuild the dither images in public/images/.

Usage (from the repo root):  python3 scripts/build-dither-assets.py
Needs Python 3 and Pillow (pip install Pillow).

Writes:
  public/images/hero-calgary-dither-green.png
      The home hero photo as a 1-bit Floyd-Steinberg dither, #6ebd6a dots on #1b3b19.
      Source: public/images/hero-calgary-bow-river.jpg (photo by Mahesh Gupta on Unsplash).
  public/images/footer-dither.png
      The footer's faint dither echo: a 320x400 tile, repeat-x, shown at 1:1 (never stretched).
      2px cells, 8x8 Bayer threshold, #6ebd6a on transparent, dense at the bottom edge and
      fading out upward.

The Bayer matrix and threshold match src/lib/dither-field.ts, which draws the example rail.
"""

import math
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "public" / "images"

SIGNAL = (0x6E, 0xBD, 0x6A)  # --signal
SURFACE_DARK = (0x1B, 0x3B, 0x19)  # --surface-dark

# Same matrix as BAYER_8 in src/lib/dither-field.ts.
BAYER_8 = [
    [0, 32, 8, 40, 2, 34, 10, 42],
    [48, 16, 56, 24, 50, 18, 58, 26],
    [12, 44, 4, 36, 14, 46, 6, 38],
    [60, 28, 52, 20, 62, 30, 54, 22],
    [3, 35, 11, 43, 1, 33, 9, 41],
    [51, 19, 59, 27, 49, 17, 57, 25],
    [15, 47, 7, 39, 13, 45, 5, 37],
    [63, 31, 55, 23, 61, 29, 53, 21],
]
CELL = 2  # px per dither cell


def build_hero() -> Path:
    src = Image.open(IMAGES / "hero-calgary-bow-river.jpg").convert("L")
    img = src.resize((1200, 675), Image.LANCZOS)
    img = ImageOps.autocontrast(img, cutoff=2)
    img = img.point(lambda v: int(255 * (v / 255) ** 1.9))
    bits = img.convert("1")  # Pillow's default conversion is Floyd-Steinberg.
    # Lit bits become #6ebd6a dots on #1b3b19, then upscale 2x without smoothing.
    out = Image.composite(Image.new("RGB", bits.size, SIGNAL), Image.new("RGB", bits.size, SURFACE_DARK), bits)
    out = out.resize((2400, 1350), Image.NEAREST)
    path = IMAGES / "hero-calgary-dither-green.png"
    out.save(path, optimize=True)
    return path


def footer_density(x: float, y: float, height: int, width: int) -> float:
    """0 at the top edge, 0.42 at the bottom edge; the same curve as one rail band.

    The rail uses sin(x/9 + ty/23). Here the x term uses 6 full periods across the tile
    (period 53.3px, close to the rail's 56.5px) so the tile repeats in x without a seam.
    """
    t = y / height
    ty = y
    d = 0.42 * t**1.6 + 0.03 * math.sin(2 * math.pi * 6 * x / width + ty / 23)
    return min(1.0, max(0.0, d))


def build_footer(width: int = 320, height: int = 400) -> Path:
    assert width % (CELL * 8) == 0, "tile width must be a whole number of Bayer periods"
    img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    px = img.load()
    for row in range(height // CELL):
        for col in range(width // CELL):
            cx = col * CELL + CELL / 2
            cy = row * CELL + CELL / 2
            threshold = (BAYER_8[row % 8][col % 8] + 0.5) / 64
            if footer_density(cx, cy, height, width) > threshold:
                for dy in range(CELL):
                    for dx in range(CELL):
                        px[col * CELL + dx, row * CELL + dy] = (*SIGNAL, 255)
    path = IMAGES / "footer-dither.png"
    img.save(path, optimize=True)
    return path


if __name__ == "__main__":
    for p in (build_hero(), build_footer()):
        print(f"wrote {p.relative_to(ROOT)}")
