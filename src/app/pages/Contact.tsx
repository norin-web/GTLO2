import { contactTopics, site } from "../content/site";
import MailForm from "../components/MailForm";

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
          <h1 className="h-page">Write to us.</h1>
          <p className="lead">Questions, feedback or a privacy request all go to one inbox.</p>
          <a className="contact__mail" href={`mailto:${site.email}`}>{site.email}</a>
          <div className="contact__tips">
            <h2>A faster answer starts with:</h2>
            <ul>{tips.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
        <div className="formcard">
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
        </div>
      </div>
    </section>
  );
}
