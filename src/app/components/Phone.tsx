import { img } from "../utils/img";

/** Transparent iPhone mockup (real app screen). No plate, no hover motion. */
export default function Phone({ src, alt, className = "", eager }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <img
      className={`phone ${className}`}
      src={img(src)}
      alt={alt}
      width={600}
      height={1254}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
