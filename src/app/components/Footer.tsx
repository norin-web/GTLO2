import { Link } from "react-router";
import { app, nav, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

const help = [
  { to: "/support", label: "Help center" },
  { to: "/feedback", label: "Send feedback" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Use" },
];

/** Light footer: brand and download on the left, link columns on the right. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__id">
            <img src={img("/images/app-icon.png")} alt="" width={52} height={52} />
            <div>
              <b>{site.brand}</b>
              <span>{site.category}</span>
            </div>
          </div>
          <p>Keep the line open with the people you’re waiting for.</p>
          <Btn href={app.url} variant="ink">Download on the App Store</Btn>
        </div>

        <nav className="footer__col" aria-label="Pages">
          <h2>Pages</h2>
          {nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </nav>
        <nav className="footer__col" aria-label="Help and legal">
          <h2>Help & legal</h2>
          {help.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </nav>
        <div className="footer__col">
          <h2>Write to us</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span className="footer__hint">Questions, feedback and privacy requests.</span>
        </div>
      </div>

      <div className="container footer__legal">
        <p>© {site.year} {site.operator}, {site.address}</p>
        <p>{site.disclaimer}</p>
      </div>
    </footer>
  );
}
