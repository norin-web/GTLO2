import { useEffect, useRef, useState } from "react";
import { app, chapters, features, moments, notes } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Icon from "../components/Icon";
import Split from "../components/Split";

/** Chapter whose text crosses the middle of the viewport drives the sticky phone. */
function useActiveChapter(count: number) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.i))),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.slice(0, count).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [count]);
  return { refs, active };
}

export default function Home() {
  const { refs, active } = useActiveChapter(chapters.length);
  const [m, setM] = useState(0);

  return (
    <>
      {/* Hero: an airmail envelope; the real app sits on the stamp */}
      <section className="hero">
        <div className="container">
          <div className="envelope">
            <div className="envelope__copy">
              <Split as="h1" className="h-hero" parts={[["Keep the line open"], ["\n"], ["while they’re away."]]} />
              <p className="lead">Find their facility and write to them from your iPhone.</p>
              <div className="hero__cta">
                <Btn href={app.url}>Download on the App Store</Btn>
                <a className="textlink" href="#story">How it works</a>
              </div>
              <p className="hero__fine">Free to download. Needs iOS {app.minIOS} or later.</p>
            </div>
            <div className="envelope__post">
              <svg className="cancel" viewBox="0 0 220 120" aria-hidden="true">
                <path d="M0 20c18-10 37-10 55 0s37 10 55 0 37-10 55 0 37 10 55 0M0 50c18-10 37-10 55 0s37 10 55 0 37-10 55 0 37 10 55 0M0 80c18-10 37-10 55 0s37 10 55 0 37-10 55 0 37 10 55 0M0 110c18-10 37-10 55 0s37 10 55 0 37-10 55 0 37 10 55 0" />
              </svg>
              <figure className="stamp">
                <img src={img("/images/hand-phone.webp")} alt="A hand holding an iPhone with the Getting Out message list open" width={1100} height={1904} />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* How it works: a real five-step sequence, so the steps are numbered */}
      <section className="story" id="story">
        <div className="container">
          <h2 className="h2 story__title">From a name on a list to a message in their hands.</h2>
          <div className="story__grid">
            <div className="story__stage" aria-hidden="true">
              <div className="story__frame">
                {chapters.map((c, i) => (
                  <img key={c.n} src={img(c.img)} alt="" width={380} height={807} className={i === active ? "is-on" : ""} loading={i ? "lazy" : "eager"} />
                ))}
              </div>
            </div>
            <ol className="story__chapters">
              {chapters.map((c, i) => (
                <li key={c.n} className={`chapter${i === active ? " is-on" : ""}`} data-i={i} ref={(el) => { refs.current[i] = el; }}>
                  <span className="chapter__n">Step {i + 1}</span>
                  <h3 className="h3">{c.title}</h3>
                  <p>{c.text}</p>
                  <img className="chapter__shot" src={img(c.img)} alt={c.alt} width={380} height={807} loading="lazy" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What is in the app: a plain list, not a card grid */}
      <section className="section">
        <div className="container inapp">
          <h2 className="h2">Small tools for a long distance.</h2>
          <ul className="inapp__list">
            {features.map((f) => (
              <li key={f.title}>
                <Icon name={f.icon} size={22} />
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI demo */}
      <section className="section section--mist">
        <div className="container ai">
          <div className="ai__copy">
            <h2 className="h2">Help with the words, not with the feelings.</h2>
            <p className="lead">Some letters are hard to start. Pick a moment and see the kind of first draft the assistant offers.</p>
            <div className="ai__chips" role="tablist" aria-label="Pick a moment">
              {moments.map((x, i) => (
                <button key={x.label} role="tab" aria-selected={i === m} className={`chipbtn${i === m ? " is-on" : ""}`} onClick={() => setM(i)}>
                  {x.label}
                </button>
              ))}
            </div>
          </div>
          <div className="ai__chat" aria-live="polite">
            <p className="ai__bar"><Icon name="sparkles" size={16} />AI Assistant</p>
            <div className="ai__thread" key={m}>
              <p className="bubble bubble--me">{moments[m].ask}</p>
              <p className="bubble bubble--ai">{moments[m].draft}</p>
              <p className="ai__note">An example written for this page. Always read a draft before you send it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="section">
        <div className="container notes">
          <h2 className="h2">Good to know before you start.</h2>
          <dl className="notes__list">
            {notes.map((n) => (
              <div key={n.title}>
                <dt>{n.title}</dt>
                <dd>{n.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Closing action */}
      <section className="closing">
        <div className="container closing__inner">
          <img src={img("/images/app-icon.png")} alt="" width={72} height={72} />
          <h2 className="h2">Write the first line today.</h2>
          <Btn href={app.url} variant="paper">Download on the App Store</Btn>
        </div>
      </section>
    </>
  );
}
