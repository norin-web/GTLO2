import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { app, site, specs, tour } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function OurApp() {
  const rail = useRef<HTMLDivElement>(null);
  // one card per click; the rail snaps, so the step only has to be roughly right
  const slide = (dir: number) => {
    const card = rail.current?.querySelector<HTMLElement>(".tour__item");
    rail.current?.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 20), behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section className="phero">
        <div className="container phero__grid">
          <div>
            <Reveal as="span" className="pill-label"><i />The app</Reveal>
            <Split as="h1" className="h-page" parts={[["Made for the long wait"], ["\n"], ["between visits.", true]]} />
            <Reveal as="p" className="lead" delay={150}>
              {site.brand} keeps the facility, the person and the conversation in one place, so staying in touch feels less like paperwork and more like talking.
            </Reveal>
            <Reveal className="hero__cta" delay={220}>
              <Btn href={app.url}>Download on the App Store</Btn>
            </Reveal>
          </div>
          <Reveal className="phero__photo" delay={120}>
            <img src={img("/images/hero-hand.webp")} alt="Getting Out message list on an iPhone held in hand" width={900} height={1574} />
          </Reveal>
        </div>
      </section>

      {/* Horizontal tour */}
      <section className="section tour">
        <div className="container section-head section-head--row">
          <Split as="h2" className="h2" parts={[["A walk through the app."]]} />
          <div className="tour__nav">
            <p className="muted section-head__aside">From your home screen to your first message.</p>
            <button className="tour__arrow" aria-label="Previous screens" onClick={() => slide(-1)}><ChevronLeft size={20} /></button>
            <button className="tour__arrow" aria-label="Next screens" onClick={() => slide(1)}><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="tour__rail" tabIndex={0} aria-label="App screens" ref={rail}>
          {tour.map((t, i) => (
            <figure key={t.title} className="tour__item">
              <img src={img(t.img)} alt={t.alt} width={380} height={807} loading={i < 2 ? "eager" : "lazy"} />
              <figcaption>
                <span className="kicker">0{i + 1}</span>
                <b>{t.title}</b>
                <span className="muted">{t.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Store card + subscription */}
      <section className="section section--mist">
        <div className="container facts">
          <Reveal className="storecard">
            <div className="storecard__head">
              <img src={img("/images/app-icon.png")} alt="" width={88} height={88} />
              <div>
                <b>{site.brand}</b>
                <span>{site.category}</span>
                <Btn href={app.url} size="sm">Get</Btn>
              </div>
            </div>
            <dl className="specs">
              {specs.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="sub" delay={100}>
            <span className="kicker">How the subscription works</span>
            <h2 className="h3">Free to explore. Subscribe to write.</h2>
            <ul className="sub__list">
              <li>Downloading {site.brand} costs nothing.</li>
              <li>Messaging with inmates is available with a subscription only.</li>
              <li>Payment is charged to your Apple ID when you confirm the purchase.</li>
              <li>It renews automatically unless you turn auto-renew off at least 24 hours before the period ends.</li>
              <li>Manage or cancel any time in your Apple ID settings.</li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
