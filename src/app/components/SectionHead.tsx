import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Centered section heading: small label, serif title, optional lead. */
export default function SectionHead({ label, title, lead, as = "h2" }: { label?: string; title: ReactNode; lead?: ReactNode; as?: "h1" | "h2" }) {
  const H = as;
  return (
    <Reveal className="shead">
      {label && <span className="label">{label}</span>}
      <H className={as === "h1" ? "h1" : "h2"}>{title}</H>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
