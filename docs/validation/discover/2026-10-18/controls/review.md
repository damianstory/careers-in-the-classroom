# Discover controls and fullscreen — local review

User requested removal of the round-style, slower and Subjects controls, placement of Full screen below the header’s Sign up free button, a centered fullscreen game, and a clear Escape exit hint.

The extra toolbar controls and hidden S speed shortcut are removed. Cycling remains the ordinary mode; the system reduced-motion preference retains the single-picture alternative. The existing JOBS selector on the start screen remains available for choosing the deck’s classroom subject.

Full screen aligns with the header’s right edge. In fullscreen, the game centers vertically in the available space beneath the toolbar. Longer explanation panels remain scrollable from their top; artwork keeps its aspect ratio. At short desktop heights the guessing image adapts so the reveal control fits. The fullscreen toolbar displays “Press Esc to exit full screen” and an Exit full screen button. Both Escape and the button exit; native fullscreen changes restore the button label and remove the hint.

Screenshots: fullscreen-start.png, desktop-start.png, desktop-guess.png and phone-start.png. Fullscreen geometry checks are recorded separately. No push or deployment has been made for this update.

Validation: 195 unit tests pass; typecheck and scoped lint pass. The Discover regression suite passes 23 tests (21 viewport-inapplicable skips), including all 342 reveal states at three widths. After the final fullscreen-only sizing refinement, a new production build and both focused fullscreen tests pass, covering normal/fullscreen 720p fit for cards 07 and 18, header alignment, centering, Escape and button exit.
