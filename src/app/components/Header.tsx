import { Link, NavLink } from "react-router";
import { nav, app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Icon from "./Icon";

/**
 * Desktop: one floating capsule (logo · links · Download), always pinned.
 * Mobile: slim top bar with logo + Download, and an iOS-style tab bar at the bottom.
 */
export default function Header() {
  return (
    <>
      <header className="dock">
        <div className="dock__pill">
          <Link to="/" className="logo" aria-label={`${site.brand} home`}>
            <img src={img("/images/app-icon.png")} alt="" width={34} height={34} />
            <span>{site.brand}</span>
          </Link>
          <nav className="dock__nav" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => `dock__link${isActive ? " is-active" : ""}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Btn href={app.url} variant="ink" size="sm">Download</Btn>
        </div>
      </header>

      <nav className="tabbar" aria-label="Main">
        {nav.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => `tabbar__item${isActive ? " is-active" : ""}`}>
            <Icon name={n.icon} size={22} />
            <span>{n.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
