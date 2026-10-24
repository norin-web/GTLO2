import { useEffect } from "react";
import Btn from "../components/Btn";
import { site } from "../content/site";

export default function NotFound() {
  useEffect(() => {
    document.title = `${site.brand} — Page not found`;
  }, []);
  return (
    <section className="phero phero--center notfound">
      <div className="container container--narrow">
        <span className="pill-label"><i />404</span>
        <h1 className="h-page">This page didn’t make it<br />to the right address.</h1>
        <p className="lead">The link may be old or mistyped. Let’s get you back on track.</p>
        <div className="hero__cta hero__cta--center">
          <Btn to="/">Back to Home</Btn>
          <Btn to="/support" variant="ghost">Visit Help</Btn>
        </div>
      </div>
    </section>
  );
}
