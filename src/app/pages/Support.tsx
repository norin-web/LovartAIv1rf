import { faq, site } from "../content/site";
import Faq from "../components/Faq";
import Glow from "../components/Glow";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Support() {
  return (
    <>
      <section className="hero hero--short">
        <Glow imgs={["/images/style-ob-11.webp", "/images/style-ob-1.webp"]} />
        <div className="hero__copy">
          <span className="label">Support</span>
          <Split as="h1" className="h1" parts={[["How can we help?"]]} />
          <Reveal as="p" className="lead hero__lead" delay={250}>
            Answers to common questions about creating, styles, saving and your subscription. Still stuck? Write to {site.email}.
          </Reveal>
        </div>
      </section>
      <section className="section section--tight">
        <div className="container container--text">
          <Faq items={faq} />
          <Reveal className="help">
            <div>
              <h2 className="h3">Still need help?</h2>
              <p>Write to us and attach a screenshot if you can.</p>
            </div>
            <a className="btn btn--white btn--md" href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
