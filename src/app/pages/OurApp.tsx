import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { app, site, specs, tour } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";

export default function OurApp() {
  const rail = useRef<HTMLDivElement>(null);
  // one card per click; the rail snaps, so the step only has to be roughly right
  const slide = (dir: number) => {
    const card = rail.current?.querySelector<HTMLElement>(".tour__item");
    rail.current?.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 24), behavior: "smooth" });
  };

  return (
    <>
      {/* Hero: the two people every message connects */}
      <section className="phero">
        <div className="container phero__grid">
          <div className="phero__copy">
            <h1 className="h-page">Made for the long wait between visits.</h1>
            <p className="lead">The facility, the person and the conversation, kept in one place.</p>
            <div className="hero__cta">
              <Btn href={app.url}>Download on the App Store</Btn>
            </div>
          </div>
          <figure className="phero__photo">
            <img src={img("/images/together.webp")} alt="A woman texting at home while a man reads a message inside a facility" width={1400} height={2488} />
          </figure>
        </div>
      </section>

      {/* Horizontal tour */}
      <section className="section tour">
        <div className="container tour__head">
          <h2 className="h2">A walk through the app.</h2>
          <div className="tour__nav">
            <button className="tour__arrow" aria-label="Previous screens" onClick={() => slide(-1)}><ChevronLeft size={20} /></button>
            <button className="tour__arrow" aria-label="Next screens" onClick={() => slide(1)}><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="tour__rail" tabIndex={0} aria-label="App screens" ref={rail}>
          {tour.map((t, i) => (
            <figure key={t.title} className="tour__item">
              <img src={img(t.img)} alt={t.alt} width={380} height={807} loading={i < 2 ? "eager" : "lazy"} />
              <figcaption>
                <b>{t.title}</b>
                <span>{t.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Store facts + subscription */}
      <section className="section section--mist">
        <div className="container facts">
          <div className="storecard">
            <div className="storecard__head">
              <img src={img("/images/app-icon.png")} alt="" width={88} height={88} />
              <div>
                <b>{site.brand}</b>
                <span>{site.category}</span>
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
          </div>
          <div className="sub">
            <h2 className="h3">Free to explore. Subscribe to write.</h2>
            <ul className="sub__list">
              <li>Downloading {site.brand} costs nothing.</li>
              <li>Messaging with inmates is available with a subscription only.</li>
              <li>Payment is charged to your Apple ID when you confirm the purchase.</li>
              <li>It renews automatically unless you turn auto-renew off at least 24 hours before the period ends.</li>
              <li>Deleting the app does not cancel it. Manage it in your Apple ID settings.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
