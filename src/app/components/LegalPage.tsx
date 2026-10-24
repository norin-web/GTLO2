import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { site } from "../content/site";
import { legalUpdated, type Doc } from "../content/legal";
import Reveal from "./Reveal";
import Split from "./Split";
import Btn from "./Btn";

type Section = { id: string; n: number; title: string; blocks: string[] };

// turn plain email addresses into mailto links, text otherwise untouched
const linkify = (text: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={i} href={`mailto:${part}`}>{part}</a> : <Fragment key={i}>{part}</Fragment>,
  );

/** Split the verbatim text into "## " sections; wording is never changed. */
function parse(body: string): Section[] {
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) {
      const n = sections.length + 1;
      sections.push({ id: `s${n}`, n, title: block.slice(3), blocks: [] });
    } else sections[sections.length - 1]?.blocks.push(block);
  }
  return sections;
}

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- ")) return <ul>{text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}</ul>;
  return <p>{text.split("\n").map((line, i) => <Fragment key={i}>{i > 0 && <br />}{linkify(line)}</Fragment>)}</p>;
}

/** Plain reader: Privacy | Terms segmented switch, numbered contents on the left, one white sheet. */
export default function LegalPage({ doc }: { doc: Doc }) {
  const sections = useMemo(() => parse(doc.body), [doc.body]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.n))),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    document.querySelectorAll(".legal__sec").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const dated = legalUpdated !== "PLACEHOLDER";

  return (
    <>
      <section className="phero phero--center">
        <div className="container container--narrow">
          <nav className="seg" aria-label="Legal documents">
            <Link to="/privacy" className={doc.current === "privacy" ? "is-on" : ""}>Privacy</Link>
            <Link to="/terms" className={doc.current === "terms" ? "is-on" : ""}>Terms</Link>
          </nav>
          <Split as="h1" className="h-page" parts={[[doc.title]]} />
          <Reveal as="p" className="lead" delay={150}>{doc.summary}</Reveal>
          {dated && <p className="legal__meta">Last updated {legalUpdated}</p>}
        </div>
      </section>

      <section className="section section--top0">
        <div className="container">
          {sections.length ? (
            <div className="legal">
              <nav className="legal__toc" aria-label="Contents">
                <b>Contents</b>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={active === s.n ? "is-on" : ""}>
                    <span>{s.n}</span>
                    {s.title}
                  </a>
                ))}
              </nav>
              <article className="legal__body">
                {sections.map((s) => (
                  <section key={s.id} id={s.id} data-n={s.n} className="legal__sec">
                    <h2>{s.n}. {s.title}</h2>
                    {s.blocks.map((b, i) => <Block key={i} text={b} />)}
                  </section>
                ))}
              </article>
            </div>
          ) : (
            <div className="legal__body legal__empty">
              <span className="kicker">Coming to this page</span>
              <h2 className="h3">The full {doc.title} will be published here.</h2>
              <p className="muted">Until then, the current version is the one linked from our App Store listing. Questions about it: <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.</p>
              <Btn href={doc.source} variant="ghost">Read the current {doc.title}</Btn>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
