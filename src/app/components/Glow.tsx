import { img } from "../utils/img";

/**
 * Soft background made from the app's own pictures under a heavy blur,
 * faded to white at the bottom (replaces the reference's lavender gradient).
 */
export default function Glow({ imgs, className = "" }: { imgs: string[]; className?: string }) {
  return (
    <div className={`glow ${className}`} aria-hidden="true">
      <div className="glow__imgs">
        {imgs.map((s) => <span key={s} style={{ backgroundImage: `url(${img(s)})` }} />)}
      </div>
      <div className="glow__fade" />
    </div>
  );
}
