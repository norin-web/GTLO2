import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { app, chapters, faq, features, moments, notes } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
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
      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal as="span" className="pill-label"><i />Inmate messaging for iPhone</Reveal>
            <Split as="h1" className="h-hero" parts={[["Keep the line open"], ["\n"], ["while they’re away.", true]]} />
            <Reveal as="p" className="lead" delay={150}>
              Find the facility, reach the person you love and write to them from your iPhone, with a gentle AI assistant for the days the words feel heavy.
            </Reveal>
            <Reveal className="hero__cta" delay={220}>
              <Btn href={app.url}>Download on the App Store</Btn>
              <a className="textlink" href="#story">See how it works</a>
            </Reveal>
            <Reveal as="ul" className="hero__facts" delay={280}>
              <li><b>Free</b> to download</li>
              <li><b>iOS {app.minIOS}</b> or later</li>
              <li><b>{app.languages}</b> languages</li>
            </Reveal>
          </div>
          <Reveal className="hero__visual" delay={120}>
            <div className="hero__glow" aria-hidden="true" />
            <img className="hero__phone hero__phone--back" src={img("/images/phone-ai.webp")} alt="" width={380} height={807} />
            <img className="hero__phone" src={img("/images/phone-home.webp")} alt="Getting Out home screen with favorites and conversations" width={380} height={803} />
            <div className="chip chip--a"><Icon name="building" size={18} /><span><b>Maricopa County Jail</b><small>Phoenix, AZ</small></span></div>
            <div className="chip chip--b"><Icon name="sparkles" size={18} /><span><b>Ask AI to write a message</b><small>You review every draft</small></span></div>
          </Reveal>
        </div>
      </section>

      {/* Scroll story */}
      <section className="story" id="story">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="kicker">How it works</Reveal>
            <Split as="h2" className="h2" parts={[["From a name on a list"], ["\n"], ["to a message in their hands."]]} />
          </div>
          <div className="story__grid">
            <div className="story__stage" aria-hidden="true">
              <div className="story__frame">
                {chapters.map((c, i) => (
                  <img key={c.n} src={img(c.img)} alt="" width={380} height={807} className={i === active ? "is-on" : ""} loading={i ? "lazy" : "eager"} />
                ))}
              </div>
              <ol className="story__dots">
                {chapters.map((c, i) => <li key={c.n} className={i === active ? "is-on" : ""} />)}
              </ol>
            </div>
            <div className="story__chapters">
              {chapters.map((c, i) => (
                <article key={c.n} className={`chapter${i === active ? " is-on" : ""}`} data-i={i} ref={(el) => { refs.current[i] = el; }}>
                  <span className="chapter__n">{c.n}</span>
                  <span className="kicker">{c.kicker}</span>
                  <h3 className="h3">{c.title}</h3>
                  <p className="muted">{c.text}</p>
                  <img className="chapter__shot" src={img(c.img)} alt={c.alt} width={380} height={807} loading="lazy" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section--mist">
        <div className="container">
          <div className="section-head section-head--row">
            <Split as="h2" className="h2" parts={[["Small tools for"], ["\n"], ["a long distance."]]} />
            <Reveal as="p" className="muted section-head__aside">Everything in the app serves one purpose: helping you stay part of their life.</Reveal>
          </div>
          <ul className="features">
            {features.map((f, i) => (
              <Reveal as="li" key={f.title} className="feature" delay={(i % 3) * 70}>
                <span className="feature__icon"><Icon name={f.icon} size={22} /></span>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* AI demo */}
      <section className="section">
        <div className="container ai">
          <div className="ai__copy">
            <Reveal as="span" className="kicker">AI assistant</Reveal>
            <Split as="h2" className="h2" parts={[["Help with the words,"], ["\n"], ["not with the feelings."]]} />
            <Reveal as="p" className="lead">Some letters are hard to start. Describe the moment and the assistant offers a first draft. You keep what sounds like you.</Reveal>
            <div className="ai__chips" role="tablist" aria-label="Pick a moment">
              {moments.map((x, i) => (
                <button key={x.label} role="tab" aria-selected={i === m} className={`chipbtn${i === m ? " is-on" : ""}`} onClick={() => setM(i)}>
                  {x.label}
                </button>
              ))}
            </div>
          </div>
          <Reveal className="ai__chat" delay={100}>
            <div className="ai__bar"><Icon name="sparkles" size={16} />AI Assistant</div>
            <div className="ai__thread" key={m}>
              <p className="bubble bubble--me">{moments[m].ask}</p>
              <p className="bubble bubble--ai">{moments[m].draft}</p>
              <span className="ai__note">Example draft · always review before sending</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Good to know */}
      <section className="section section--tight">
        <div className="container">
          <Reveal as="h2" className="h3 notes__title">Good to know before you start</Reveal>
          <ol className="notes">
            {notes.map((n, i) => (
              <Reveal as="li" key={n.title} className="gk" delay={i * 70}>
                <span className="gk__n">{i + 1}</span>
                <div>
                  <h3>{n.title}</h3>
                  <p className="muted">{n.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Questions */}
      <section className="section section--mist">
        <div className="container">
          <div className="section-head section-head--row">
            <Split as="h2" className="h2" parts={[["Questions people ask first."]]} />
            <Link className="textlink" to="/support">All answers in Help</Link>
          </div>
          <div className="qcards">
            {[faq[0], faq[3], faq[6]].map((f, i) => (
              <Reveal key={f.q} className="qcard" delay={i * 70}>
                <span className="kicker">{f.topic}</span>
                <h3>{f.q}</h3>
                <p className="muted">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal className="cta">
            <img src={img("/images/app-icon.png")} alt="" width={76} height={76} />
            <h2 className="h2">Write the first line today.</h2>
            <p className="lead">The wait is long. A message makes it a little shorter.</p>
            <Btn href={app.url}>Download on the App Store</Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
