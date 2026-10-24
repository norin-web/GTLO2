import { useState } from "react";

/** Accordion with a plus that turns into a minus; several items can be open. */
export default function Faq({ items, first = true }: { items: { q: string; a: string }[]; first?: boolean }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set(first ? [0] : []));
  const toggle = (i: number) =>
    setOpen((s) => {
      const n = new Set(s);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  return (
    <div className="faq">
      {items.map((f, i) => {
        const on = open.has(i);
        return (
          <div className={`faq__item${on ? " is-open" : ""}`} key={f.q}>
            <button className="faq__q" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => toggle(i)}>
              <span>{f.q}</span>
              <i className="faq__pm" aria-hidden="true" />
            </button>
            <div className="faq__a" id={`faq-${i}`} role="region" aria-hidden={!on} {...({ inert: on ? undefined : "" } as object)}>
              <div className="faq__inner">
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
