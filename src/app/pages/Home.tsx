import { useState } from "react";
import { Link } from "react-router";
import { app, categories, faq, features, gallery, heroCards, looks, models, pro, prompts, scenarios, steps } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Faq from "../components/Faq";
import Glow from "../components/Glow";
import Phone from "../components/Phone";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import Split from "../components/Split";

function Hero() {
  return (
    <section className="hero">
      <Glow imgs={["/images/style-home-8.webp", "/images/style-home-11.webp", "/images/style-home-8.webp"]} />
      <div className="hero__copy">
        <span className="label label--hero"><b>iPhone</b>AI Image Generator</span>
        <Split as="h1" className="h-hero" parts={[["Turn ideas into images."]]} />
        <Reveal as="p" className="lead hero__lead" delay={250}>
          Describe what you see in one sentence or add a photo. Lovart AI turns it into a finished picture in the style you pick.
        </Reveal>
        <Reveal className="hero__cta" delay={400}>
          <Btn href={app.url}>Download on the App Store</Btn>
          <span className="small muted">Free on the App Store · for iPhone</span>
        </Reveal>
      </div>
      <div className="hero__visual">
        {heroCards.slice(0, 2).map((c) => (
          <figure key={c.label} className={`scard scard--${c.size}`}>
            <img src={img(c.img)} alt={`${c.label} style example`} loading="eager" />
            <figcaption>{c.label}</figcaption>
          </figure>
        ))}
        <Phone src="/images/phone-tokyo-result.webp" alt="Lovart AI result for the prompt “A neon-lit Tokyo alley in the rain”" className="hero__phone" eager />
        {heroCards.slice(2).map((c) => (
          <figure key={c.label} className={`scard scard--${c.size}`}>
            <img src={img(c.img)} alt={`${c.label} style example`} loading="eager" />
            <figcaption>{c.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Models() {
  return (
    <section className="models">
      <p className="small muted">Pick the model for the job, right in the prompt bar</p>
      <ul className="models__row">
        {models.map((m) => <li key={m}>{m}</li>)}
      </ul>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section band">
      <div className="container">
        <SectionHead label="How it works" title="One sentence is all it takes" lead="No skills needed — just say what you want. Three steps from an idea to a picture you can save." />
        <div className="steps">
          <Reveal className="step">
            <div className="step__art"><img className="step__icon" src={img("/images/app-icon.png")} alt="" width={96} height={96} /></div>
            <h3>{steps[0].title}</h3>
            <p>{steps[0].text}</p>
          </Reveal>
          <Reveal className="step" delay={100}>
            <div className="step__art">
              <div className="promptbar" aria-hidden="true">
                <span className="promptbar__text">A neon-lit Tokyo alley in the rain</span>
                <div className="promptbar__row">
                  <span>+</span><span>Flux ⌄</span><span>4:5 ⌄</span>
                  <i className="promptbar__send">↑</i>
                </div>
              </div>
            </div>
            <h3>{steps[1].title}</h3>
            <p>{steps[1].text}</p>
          </Reveal>
          <Reveal className="step" delay={200}>
            <div className="step__art step__art--pair">
              <img src={img("/images/style-home-8.webp")} alt="" loading="lazy" />
              <img src={img("/images/style-home-4.webp")} alt="" loading="lazy" />
            </div>
            <h3>{steps[2].title}</h3>
            <p>{steps[2].text}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Looks() {
  const [i, setI] = useState(0);
  const cur = looks[i];
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="Try a style" title="One selfie, a hundred looks" lead="Portraits, avatars and film stills — all from the same photo. Works with pictures you already have on your phone." />
        <div className="tabs" role="tablist" aria-label="Styles">
          {looks.map((l, k) => (
            <button key={l.tab} role="tab" aria-selected={k === i} className={k === i ? "is-on" : ""} onClick={() => setI(k)}>
              {l.tab}
            </button>
          ))}
        </div>
        <div className="looks" role="tabpanel">
          <div className="looks__copy" key={`c${i}`}>
            <h3 className="h3">{cur.tab}</h3>
            <span className="small muted">{cur.meta}</span>
            {cur.prompt && (
              <div className="looks__prompt">
                <b>Prompt</b>
                <p>{cur.prompt}</p>
              </div>
            )}
            <Btn href={app.url}>Try this style in the app</Btn>
          </div>
          <div className="looks__stage">
            <figure className="looks__selfie">
              <img src={img("/images/style-home-10.webp")} alt="Original photo" loading="lazy" />
              <figcaption>Your photo</figcaption>
            </figure>
            <svg className="looks__arrow" width="40" height="16" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 8h36M31 2l6 6-6 6" /></svg>
            <div className="looks__out" key={`o${i}`}>
              {cur.phone ? (
                <Phone src={cur.phone} alt={`${cur.tab} result in the app`} className="looks__phone" />
              ) : (
                <img className="looks__sample" src={img(cur.sample!)} alt={`${cur.tab} style example`} loading="lazy" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section band">
      <div className="container">
        <SectionHead label="Features" title={<>Everything you need to make<br className="only-wide" /> the picture you have in mind</>} />
        <div className="fgrid">
          {features.map((f, k) => (
            <Reveal className="fcard" key={f.title} delay={(k % 3) * 80}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <div className="fcard__phone"><Phone src={f.phone} alt={`${f.title} screen`} /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Styles() {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? gallery : gallery.filter((g) => g.cat === cat);
  // only categories that have examples on the site get a chip
  const chips = categories.filter((c) => c === "All" || gallery.some((g) => g.cat === c));
  return (
    <section className="section styles">
      <div className="container">
        <SectionHead label="Explore" title="Styles for every kind of picture" lead="Browse trending and studio styles, save the ones you like and try any of them with a tap." />
      </div>
      <div className="chips" role="group" aria-label="Categories">
        {chips.map((c) => (
          <button key={c} className={c === cat ? "is-on" : ""} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="gallery">
        {items.map((g) => (
          <figure key={g.label} className="gcard" style={{ ["--y" as string]: `${g.y}px` }}>
            <img src={img(g.img)} alt={`${g.label} style example`} loading="lazy" />
            <figcaption>{g.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Pro() {
  return (
    <section className="section band">
      <div className="container">
        <SectionHead label="Lovart AI Pro" title="Make every idea real" lead="Pro keeps every style and every model open. Plans and the current price are shown in the app before you subscribe." />
        <div className="pro">
          <Reveal className="pro__card">
            <div className="pro__head">
              <img src={img("/images/app-icon.png")} alt="" width={36} height={36} />
              <b>Pro</b>
              <span className="badge">Free trial in the app</span>
            </div>
            <div className="pro__stats">
              {pro.stats.map(([n, l]) => (
                <div key={n}><span>{n}</span><small>{l}</small></div>
              ))}
            </div>
            <ul className="pro__perks">
              {pro.perks.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <Btn href={app.url} variant="white">Start free trial in the app</Btn>
          </Reveal>
          <Reveal className="pro__billing" delay={100}>
            <h3>How billing works</h3>
            {pro.billing.map(([h, t]) => (
              <div key={h}><b>{h}</b><p>{t}</p></div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Prompts() {
  const [first, ...rest] = prompts;
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="Prompt → result" title="Say it the way you see it" lead="Real prompts from the app and what came back. Every result keeps its prompt, so you can copy it and try again." />
        <div className="prompts">
          <Reveal className="pcard pcard--wide">
            <img src={img(first.img)} alt="Result: a neon-lit Tokyo alley in the rain" loading="lazy" />
            <div className="pcard__body">
              <q className="pcard__quote">{first.prompt}</q>
              <div>
                <span className="small muted">{first.note}</span>
                <div className="pcard__tags">{first.meta?.map((m) => <span key={m}>{m}</span>)}</div>
              </div>
            </div>
          </Reveal>
          {rest.map((p, k) => (
            <Reveal className="pcard" key={p.note} delay={(k + 1) * 80}>
              <img src={img(p.img)} alt={`Result: ${p.note}`} loading="lazy" />
              <div className="pcard__body">
                <q>{p.prompt}</q>
                <span className="small muted">{p.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  return (
    <section className="section band">
      <div className="container">
        <SectionHead label="Use it for" title="Pictures you’ll actually use" />
        <div className="cards3">
          {scenarios.map((s, k) => (
            <Reveal className="ccard" key={s.title} delay={k * 80}>
              <img src={img(s.img)} alt="" loading="lazy" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  return (
    <section className="section">
      <div className="container container--text">
        <SectionHead label="FAQ" title="Things you need to know" />
        <Faq items={[faq[0], faq[2], faq[4], faq[6], faq[7]]} />
        <p className="center faq__more"><Link className="link" to="/support">More answers on the Support page</Link></p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Models />
      <HowItWorks />
      <Looks />
      <Features />
      <Styles />
      <Pro />
      <Prompts />
      <Scenarios />
      <HomeFaq />
    </>
  );
}
