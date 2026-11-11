import { Fragment, useMemo, type ReactNode } from "react";
import { Link } from "react-router";
import { site } from "../content/site";
import { legalUpdated, type LegalDoc } from "../content/legal";
import Glow from "./Glow";

// turn plain email addresses into mailto links, text otherwise untouched
const linkify = (text: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={i} href={`mailto:${part}`}>{part}</a> : part,
  );

type Section = { title: string; blocks: string[] };

/** Split the verbatim text into an intro and "## " sections; wording is never changed. */
function parse(body: string) {
  const intro: string[] = [];
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) sections.push({ title: block.slice(3), blocks: [] });
    else if (sections.length) sections[sections.length - 1].blocks.push(block);
    else if (block.trim()) intro.push(block);
  }
  return { intro, sections };
}

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  // all-caps legal clauses get a quiet grey panel so they don't shout across the page
  const caps = text.length > 40 && text === text.toUpperCase();
  return (
    <p className={caps ? "doc__caps" : undefined}>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

/** Placeholder bars that show the layout until the owner's text arrives. */
const Skeleton = () => (
  <>
    {[[100, 94, 70], [100, 86], [100, 78]].map((rows, i) => (
      <section className="doc__sec" key={i}>
        <h2>{i + 1}. Section title</h2>
        <div className={i === 2 ? "doc__caps doc__sk" : "doc__sk"}>
          {rows.map((w, j) => <span key={j} style={{ width: `${w}%` }} />)}
        </div>
      </section>
    ))}
  </>
);

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const { intro, sections } = useMemo(() => parse(doc.body), [doc.body]);
  const empty = !doc.body.trim();

  return (
    <section className="doc">
      <Glow imgs={["/images/style-ob-11.webp", "/images/style-home-8.webp"]} />
      <article className="doc__card">
        <h1 className="doc__title">{doc.title}</h1>
        <div className="doc__meta">
          <span>
            {[legalUpdated && `Effective ${legalUpdated}`, site.operator].filter(Boolean).join(" · ")}
            {(legalUpdated || site.operator) && " · "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
          <Link to={doc.other.to} className="doc__switch">
            {doc.other.to === "/terms" ? `${doc.other.label} →` : `← ${doc.other.label}`}
          </Link>
        </div>

        {empty ? (
          <>
            <p className="doc__intro">The owner’s {doc.title} will be placed here word for word.</p>
            <Skeleton />
          </>
        ) : (
          <>
            {intro.map((t, i) => <p className="doc__intro" key={i}>{linkify(t)}</p>)}
            {sections.map((s, i) => (
              <section className="doc__sec" key={i}>
                <h2>{i + 1}. {s.title}</h2>
                {s.blocks.map((b, j) => <Block key={j} text={b} />)}
              </section>
            ))}
          </>
        )}

        <div className="doc__ask">
          <div>
            <b>Questions about this document?</b>
            <span>{doc.note}</span>
          </div>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </article>
    </section>
  );
}
