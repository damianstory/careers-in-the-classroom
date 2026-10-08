import Image from "next/image";
import { exampleImages } from "@/content/example-images";
import styles from "./ExampleIllustration.module.css";

export function ExampleIllustration({ slug, variant }: { slug: string; variant: "card" | "story" }) {
  const image = exampleImages[slug];
  if (!image) return null;

  return (
    <figure className={`${styles.figure} ${styles[variant]}`}>
      <Image
        src={image.src}
        alt={variant === "card" ? "" : image.alt}
        sizes={variant === "card"
          ? "(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
          : "(max-width: 720px) 100vw, 680px"}
        className={styles.image}
      />
    </figure>
  );
}
