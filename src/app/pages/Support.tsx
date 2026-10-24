import { useState } from "react";
import { Link } from "react-router";
import { faq, site, topics } from "../content/site";
import Faq from "../components/Faq";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Support() {
  const [t, setT] = useState<string>("All");
  const items = t === "All" ? faq : faq.filter((f) => f.topic === t);
  const count = (x: string) => (x === "All" ? faq.length : faq.filter((f) => f.topic === x).length);

  return (
    <>
      <section className="phero phero--center">
        <div className="container container--narrow">
          <Reveal as="span" className="pill-label"><i />Help center</Reveal>
          <Split as="h1" className="h-page" parts={[["How can we help?"]]} />
          <Reveal as="p" className="lead" delay={150}>Pick a topic to narrow the answers, or write to us if yours isn’t here.</Reveal>
        </div>
      </section>

      <section className="section section--top0">
        <div className="container help">
          <aside className="help__topics" aria-label="Topics">
            {["All", ...topics].map((x) => (
              <button key={x} className={`topic${t === x ? " is-on" : ""}`} aria-pressed={t === x} onClick={() => setT(x)}>
                <span>{x}</span>
                <small>{count(x)}</small>
              </button>
            ))}
          </aside>
          <div className="help__list">
            <h2 className="h3">{t === "All" ? "All questions" : t}</h2>
            <Faq key={t} items={items} />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="whois">
            <div>
              <span className="kicker">Still stuck?</span>
              <h2 className="h3">Tell us what happened.</h2>
              <p className="muted">Include the facility name and your iPhone model. It helps us answer faster.</p>
            </div>
            <div className="whois__cta">
              <a className="whois__mail" href={`mailto:${site.email}`}>{site.email}</a>
              <Link className="textlink" to="/contact">Open the contact form</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
