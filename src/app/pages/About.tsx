import { site, values } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";

export default function About() {
  return (
    <>
      <section className="phero">
        <div className="container phero__narrow">
          <h1 className="h-page">Distance is hard. Keeping in touch isn’t.</h1>
          <p className="lead">A few words to someone inside should never turn into a chore.</p>
        </div>
      </section>

      <section className="section">
        <div className="container values">
          <figure className="values__photo">
            <img src={img("/images/together.webp")} alt="A woman smiling at a message on her phone while a man inside a facility reads his" width={1400} height={2488} />
          </figure>
          <div className="values__body">
          <h2 className="h2">What we hold ourselves to.</h2>
          <dl className="values__list">
            {values.map((v) => (
              <div key={v.title}>
                <dt>{v.title}</dt>
                <dd>{v.text}</dd>
              </div>
            ))}
          </dl>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="whois">
            <div>
              <h2 className="h3">{site.operator} runs {site.brand}.</h2>
              <p>
                We develop and support the app from Chisinau, Moldova, under a brand authorization from the GettingOut trademark owner. Questions about the app, your subscription or your data all go to one inbox.
              </p>
            </div>
            <div className="whois__cta">
              <a className="whois__mail" href={`mailto:${site.email}`}>{site.email}</a>
              <Btn to="/app" variant="ghost">See the app</Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
