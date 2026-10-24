import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowUp } from "lucide-react";
import { app, chapters, features, moments, notes } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Icon from "../components/Icon";

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

// Hero thread, from the first onboarding screen of the app (newest on top, as there)
const thread = [
  { me: false, text: "I will. We all love you.", time: "11:45 AM" },
  { me: true, text: "Tell them Dad loves them. I can’t wait to hear their voices.", time: "11:44 AM" },
  { me: false, text: "I miss you too. The kids were asking about you this morning.", time: "11:43 AM" },
  { me: true, text: "Been thinking about you all day. Miss you so much…", time: "11:42 AM" },
];

export default function Home() {
  const { refs, active } = useActiveChapter(chapters.length);
  const [m, setM] = useState(0);

  return (
    <>
      {/* Hero: the onboarding screen of the app, opened up to page width */}
      <section className="ob">
        <div className="container ob__grid">
          <div className="ob__copy">
            <h1 className="h-hero">Keep the line open while they’re away.</h1>
            <p className="lead">Find their facility and write to them from your iPhone.</p>
            <div className="ob__cta">
              <Btn href={app.url}>Download on the App Store</Btn>
              <a className="textlink" href="#story">How it works</a>
            </div>
          </div>
          <div className="ob__scene">
            <img className="ob__photo" src={img("/images/woman-phone.webp")} alt="A woman reading a message on her iPhone" width={900} height={1518} />
            <ol className="ob__thread" aria-label="An example conversation">
              {thread.map((b, i) => (
                <li key={b.time} className={`msg${b.me ? " msg--me" : ""}`} style={{ ["--d" as string]: thread.length - 1 - i }}>
                  <p>{b.text}</p>
                  <time>{b.time}</time>
                  {b.me && <img className="msg__ava" src={img("/images/avatar-inside.webp")} alt="" width={48} height={48} />}
                </li>
              ))}
            </ol>
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

      {/* What is in the app: one grouped list, the way iOS Settings shows it */}
      <section className="section section--deep">
        <div className="container inapp">
          <h2 className="h2">Small tools for a long distance.</h2>
          <ul className="group">
            {features.map((f) => (
              <li key={f.title}>
                <span className="group__ico"><Icon name={f.icon} size={20} /></span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI demo, drawn like the AI Assistant screen */}
      <section className="section">
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
          <div className="aiscreen" aria-live="polite">
            <p className="aiscreen__bar"><span className="aiscreen__badge"><Icon name="sparkles" size={16} /></span>AI Assistant</p>
            <div className="aiscreen__thread" key={m}>
              <p className="msg msg--me msg--flat"><span>{moments[m].ask}</span></p>
              <p className="msg msg--flat"><span>{moments[m].draft}</span></p>
            </div>
            <div className="aiscreen__input" aria-hidden="true">
              <span>Ask AI to write a message</span>
              <span className="aiscreen__send"><ArrowUp size={18} /></span>
            </div>
            <p className="aiscreen__note">An example written for this page. Always read a draft before you send it.</p>
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="section section--top0">
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

      {/* Closing: the bottom sheet of the onboarding screen */}
      <section className="closing">
        <div className="container">
          <div className="sheet">
            <img src={img("/images/app-icon.png")} alt="" width={72} height={72} />
            <h2 className="h2">Write the first line today.</h2>
            <p className="lead">Stay close to the person you’re waiting for, one message at a time.</p>
            <Btn href={app.url} className="sheet__btn">Download on the App Store</Btn>
            <p className="sheet__links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
