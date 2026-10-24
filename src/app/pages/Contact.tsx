import { contactTopics, site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const tips = [
  "The facility name and city, if your question is about a contact",
  "Your iPhone model and iOS version",
  "What you expected to happen, and what happened instead",
];

export default function Contact() {
  return (
    <section className="phero">
      <div className="container contact">
        <div className="contact__copy">
          <Reveal as="span" className="pill-label"><i />Contact</Reveal>
          <Split as="h1" className="h-page" parts={[["Write to us."], ["\n"], ["A person will read it.", true]]} />
          <Reveal as="p" className="lead" delay={150}>Questions, feedback or a privacy request: it all goes to one inbox.</Reveal>
          <Reveal className="contact__mail" delay={200}>
            <span className="kicker">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
          <Reveal className="contact__tips" delay={240}>
            <h2>To get a faster answer, mention:</h2>
            <ul>{tips.map((t) => <li key={t}>{t}</li>)}</ul>
          </Reveal>
        </div>
        <Reveal className="formcard" delay={120}>
          <MailForm
            subject={`${site.brand}: message from the website`}
            submit="Send message"
            fields={[
              { name: "name", label: "Your name", auto: "name" },
              { name: "email", label: "Your email", type: "email", required: true, auto: "email" },
              { name: "topic", label: "Topic", options: contactTopics, required: true },
              { name: "message", label: "Message", textarea: true, required: true },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
