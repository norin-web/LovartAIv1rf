import { site } from "../content/site";
import Glow from "../components/Glow";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const Icon = ({ d }: { d: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

export default function Contact() {
  return (
    <section className="contact">
      <Glow imgs={["/images/style-home-8.webp", "/images/style-ob-11.webp"]} />
      <div className="container contact__grid">
        <div className="contact__copy">
          <span className="label">Contact</span>
          <Split as="h1" className="h1" parts={[["Questions? Write to a real person."]]} />
          <Reveal as="p" className="lead" delay={250}>
            Tell us what you were trying to make, a billing question, or an idea for the app. We read every message.
          </Reveal>
          <Reveal as="ul" className="contact__list" delay={350}>
            <li><Icon d="M3 7l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Icon d="M4 4h16v16H4zM21 16l-5-5-8 9" />Screenshots welcome: attach one and skip the explaining.</li>
            <li><Icon d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z" />Billing goes through Apple, so mention your Apple ID email.</li>
          </Reveal>
        </div>
        <Reveal className="contact__form" delay={200}>
          <MailForm
            subject="Lovart AI — message from the website"
            submit="Send message"
            fields={[
              { name: "name", label: "Your name", auto: "name", required: true, placeholder: "Alex Rivera" },
              { name: "email", label: "Email", type: "email", auto: "email", required: true, placeholder: "you@email.com" },
              { name: "topic", label: "Topic", options: ["Creating images", "Styles and models", "Subscription and billing", "Idea for the app", "Something else"] },
              { name: "message", label: "Message", textarea: true, required: true, placeholder: "What happened, or what you’d love Lovart AI to do…" },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
