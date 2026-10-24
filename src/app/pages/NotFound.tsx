import { useEffect } from "react";
import Btn from "../components/Btn";
import { site } from "../content/site";

export default function NotFound() {
  useEffect(() => {
    document.title = `${site.brand}: page not found`;
  }, []);
  return (
    <section className="phero notfound">
      <div className="container phero__narrow">
        <h1 className="h-page">Nothing lives at this address.</h1>
        <p className="lead">The link may be old or mistyped.</p>
        <div className="hero__cta">
          <Btn to="/">Back to Home</Btn>
          <Btn to="/support" variant="ghost">Visit Help</Btn>
        </div>
      </div>
    </section>
  );
}
