import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { app, billing, site, specs, tour } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";

export default function OurApp() {
  const rail = useRef<HTMLDivElement>(null);
  // one screen per click; the rail snaps, so the step only has to be roughly right
  const slide = (dir: number) => {
    const card = rail.current?.querySelector<HTMLElement>(".shelf__item");
    rail.current?.scrollBy({ left: dir * ((card?.offsetWidth ?? 280) + 40), behavior: "smooth" });
  };

  return (
    <>
      {/* Banner: a teal pill with the one piece of news the store confirms */}
      <div className="container">
        <a className="newsbar" href={app.url} target="_blank" rel="noopener noreferrer">
          <span className="newsbar__tag">{app.version}</span>
          <span className="newsbar__text">
            <b>{site.brand} {app.version} is on the App Store.</b>
            <span>Released {app.released}. Free to download for iPhone.</span>
          </span>
          <span className="newsbar__go">Get the app</span>
        </a>
      </div>

      {/* Hero: the app itself is the picture, seven real screens on one shelf */}
      <section className="apphero">
        <div className="container">
          <h1 className="h-page apphero__title">Made for the long wait between visits.</h1>
          <div className="apphero__row">
            <p className="lead">The facility, the person and the conversation, kept in one place.</p>
            <div className="apphero__actions">
              <Btn href={app.url}>Download on the App Store</Btn>
              <div className="shelf__nav">
                <button className="shelf__arrow" aria-label="Previous screens" onClick={() => slide(-1)}><ChevronLeft size={20} /></button>
                <button className="shelf__arrow" aria-label="Next screens" onClick={() => slide(1)}><ChevronRight size={20} /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="shelf">
          <div className="shelf__rail" tabIndex={0} aria-label="App screens" ref={rail}>
            {tour.map((t, i) => (
              <figure key={t.title} className="shelf__item">
                <img src={img(t.img)} alt={t.alt} width={380} height={807} loading={i < 3 ? "eager" : "lazy"} />
                <figcaption>
                  <b>{t.title}</b>
                  <span>{t.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* How paying works, as the four things that actually happen, then the store facts in one strip */}
      <section className="section">
        <div className="container billing">
          <h2 className="h2 billing__title">Free to explore. Subscribe to write.</h2>
          <ol className="billing__steps">
            {billing.map((b) => (
              <li key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ol>
          <div className="storestrip">
            <div className="storestrip__id">
              <img src={img("/images/app-icon.png")} alt="" width={56} height={56} />
              <div>
                <b>{site.brand}</b>
                <span>{site.category}</span>
              </div>
            </div>
            <dl className="storestrip__specs">
              {specs.filter(([k]) => k !== "Price").map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
