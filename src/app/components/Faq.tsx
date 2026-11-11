import { useState } from "react";

const Chevron = () => (
  <svg className="faq__chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/** Accordion, one item open at a time. */
export default function Faq({ items, open: first = 0 }: { items: { q: string; a: string }[]; open?: number }) {
  const [open, setOpen] = useState<number | null>(first);
  return (
    <div className="faq">
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div className={`faq__item${on ? " is-open" : ""}`} key={it.q}>
            <button className="faq__q" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? null : i)}>
              <span>{it.q}</span>
              <Chevron />
            </button>
            <div className="faq__a" id={`faq-${i}`} role="region" hidden={!on}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
