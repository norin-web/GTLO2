import { site, values } from "../content/site";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function About() {
  return (
    <>
      <section className="phero phero--center">
        <div className="container container--narrow">
          <Reveal as="span" className="pill-label"><i />About us</Reveal>
          <Split as="h1" className="h-page" parts={[["Distance is hard."], ["\n"], ["Staying in touch shouldn’t be.", true]]} />
          <Reveal as="p" className="lead" delay={150}>
            When someone you love is in prison or jail, even sending a few words can turn into a chore: which facility, which service, which form. We built {site.brand} to take that friction away and leave room for what you actually want to say.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">What guides us</span>
            <Split as="h2" className="h2" parts={[["Three things we don’t compromise on."]]} />
          </div>
          <ol className="values">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} className="value" line delay={i * 80}>
                <span className="value__n">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p className="muted">{v.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="whois">
            <div>
              <span className="kicker">Who runs it</span>
              <h2 className="h3">{site.operator}</h2>
              <p className="muted">develops and supports {site.brand}. Questions about the app, your subscription or your data go to one inbox, and a person reads every message.</p>
            </div>
            <div className="whois__cta">
              <a className="whois__mail" href={`mailto:${site.email}`}>{site.email}</a>
              <Btn to="/app" variant="ghost">See the app</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
