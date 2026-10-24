import { useState } from "react";
import { Link } from "react-router";
import { faq, site, topics } from "../content/site";
import Faq from "../components/Faq";

export default function Support() {
  const [t, setT] = useState<string>("All");
  const items = t === "All" ? faq : faq.filter((f) => f.topic === t);
  const count = (x: string) => (x === "All" ? faq.length : faq.filter((f) => f.topic === x).length);

  return (
    <>
      <section className="phero phero--short">
        <div className="container phero__narrow">
          <h1 className="h-page">How can we help?</h1>
          <p className="lead">Pick a topic to narrow the answers.</p>
        </div>
      </section>

      <section className="section section--top0">
        <div className="container help">
          <div className="help__topics" role="group" aria-label="Topics">
            {["All", ...topics].map((x) => (
              <button key={x} className={`topic${t === x ? " is-on" : ""}`} aria-pressed={t === x} onClick={() => setT(x)}>
                <span>{x}</span>
                <small>{count(x)}</small>
              </button>
            ))}
          </div>
          <div className="help__list">
            <h2 className="h3">{t === "All" ? "All questions" : t}</h2>
            <Faq key={t} items={items} />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="whois">
            <div>
              <h2 className="h3">Still stuck? Tell us what happened.</h2>
              <p>Include the facility name and your iPhone model. It helps us answer faster.</p>
            </div>
            <div className="whois__cta">
              <a className="whois__mail" href={`mailto:${site.email}`}>{site.email}</a>
              <Link className="textlink" to="/contact">Open the contact form</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
