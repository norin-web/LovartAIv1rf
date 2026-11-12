import { principles, site } from "../content/site";
import Glow from "../components/Glow";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function About() {
  return (
    <>
      <section className="hero hero--short">
        <Glow imgs={["/images/style-home-8.webp", "/images/style-ob-11.webp", "/images/style-ob-2.webp"]} />
        <div className="hero__copy">
          <span className="label">About</span>
          <Split as="h1" className="h1" parts={[["Pictures should start with words, not settings"]]} />
          <Reveal as="p" className="lead hero__lead" delay={250}>
            Lovart AI is an iPhone app by {site.operator}, an independent developer in the {site.operatorPlace}. We wanted image generation to feel like sending a message: one sentence in, a finished picture out.
          </Reveal>
        </div>
      </section>

      <section className="section band">
        <div className="container approach">
          <Reveal className="approach__head">
            <h2 className="h2">Strong models, kept out of your way</h2>
          </Reveal>
          <Reveal className="approach__text" delay={100}>
            <p>Image models keep getting better, but most apps still ask you to learn their settings first. Lovart AI hides that behind one prompt bar: write the idea, attach a photo if you have one, and choose the model only when it matters.</p>
            <p>Ready styles cover the looks people ask for most, from Oil Painting to Soft portrait, and every result keeps its prompt, so a good picture is easy to make again.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="h2" className="h2 center">Three things we hold to</Reveal>
          <div className="cards3 principles">
            {principles.map(([h, t], k) => (
              <Reveal className="principle" key={h} delay={k * 80}>
                <h3 className="h3">{h}</h3>
                <p>{t}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="company">
            <div><span className="small muted">Developer</span><b>{site.operator}</b></div>
            <div><span className="small muted">Write to us</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
