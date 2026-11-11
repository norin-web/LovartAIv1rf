import { app, appRows, reel, specs } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Glow from "../components/Glow";
import Phone from "../components/Phone";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import Split from "../components/Split";

export default function OurApp() {
  return (
    <>
      <section className="hero hero--app">
        <Glow imgs={["/images/style-ob-11.webp", "/images/style-home-11.webp", "/images/style-ob-1.webp"]} />
        <div className="hero__copy">
          <img className="hero__icon" src={img("/images/app-icon.png")} alt="" width={80} height={80} />
          <Split as="h1" className="h1" parts={[["Lovart AI for iPhone"]]} />
          <Reveal as="p" className="lead hero__lead" delay={250}>
            An AI image generator with four models, ready styles and an editing thread for every result. Here is what is inside.
          </Reveal>
          <Reveal className="hero__cta" delay={400}>
            <Btn href={app.url}>Download on the App Store</Btn>
            <span className="small muted">Free on the App Store · for iPhone</span>
          </Reveal>
        </div>
        <div className="reel" aria-label="App screens">
          {reel.map((s, k) => (
            <Phone key={s} src={s} alt="Lovart AI app screen" className={k % 2 ? "reel__low" : ""} eager={k < 3} />
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="container rows">
          {appRows.map((r, k) => (
            <Reveal className={`row${k % 2 ? " row--flip" : ""}`} key={r.title}>
              <div className="row__copy">
                <span className="small muted">{r.tag}</span>
                <h2 className="h3">{r.title}</h2>
                <p>{r.text}</p>
              </div>
              <div className="row__phone"><Phone src={r.phone} alt={`${r.tag} screen`} /></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container container--text">
          <SectionHead label="Details" title="The app at a glance" />
          <dl className="specs">
            {specs.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
