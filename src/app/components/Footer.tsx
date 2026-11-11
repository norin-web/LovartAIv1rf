import { Link, useLocation } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Glow from "./Glow";
import Reveal from "./Reveal";

// Contact, Support and the legal pages skip the big download CTA above the footer.
const NO_CTA = ["/contact", "/feedback", "/support", "/privacy", "/terms"];

export default function Footer() {
  const { pathname } = useLocation();
  const cta = !NO_CTA.includes(pathname.replace(/\/$/, ""));
  return (
    <footer className="footer">
      {cta && (
        <div className="cta">
          <div className="cta__panel">
            <Glow imgs={["/images/style-ob-11.webp", "/images/style-ob-1.webp", "/images/style-ob-2.webp"]} className="glow--cta" />
            <Reveal className="cta__inner">
              <img className="cta__icon" src={img("/images/app-icon.png")} alt="" width={72} height={72} loading="lazy" />
              <h2 className="h2 cta__title">Your next picture starts with one sentence</h2>
              <Btn href={app.url}>Download on the App Store</Btn>
            </Reveal>
          </div>
        </div>
      )}

      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <img src={img("/images/app-icon.png")} alt="" width={28} height={28} />
              <span>{site.brand}</span>
            </Link>
            <p className="muted">{site.tagline}</p>
            <a className="footer__mail" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer__cols">
            <div>
              <span className="footer__h">{site.brand}</span>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/app">App</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
              </ul>
            </div>
            <div>
              <span className="footer__h">Help</span>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          <span>© {site.year} {site.operator || site.brand}</span>
          <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
