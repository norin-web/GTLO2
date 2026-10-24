import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "./content/site";

const titles: Record<string, string> = {
  "/app": "The app",
  "/about": "About",
  "/support": "Help",
  "/contact": "Contact",
  "/feedback": "Feedback",
  "/terms": "Terms of Use",
  "/privacy": "Privacy Policy",
};

export default function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const path = pathname.replace(/\/$/, "");
    const t = titles[path];
    // brand first, so a narrow browser tab still shows the app name; NotFound sets its own
    if (t) document.title = `${site.brand}: ${t}`;
    else if (!path) document.title = `${site.brand}: ${site.category}`;
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main" className="page" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
