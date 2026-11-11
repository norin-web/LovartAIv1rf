import Btn from "../components/Btn";
import Glow from "../components/Glow";

export default function NotFound() {
  return (
    <section className="hero hero--short">
      <Glow imgs={["/images/style-ob-11.webp", "/images/style-ob-1.webp"]} />
      <div className="hero__copy">
        <h1 className="h1">This page doesn’t exist</h1>
        <p className="lead">The link may be old. Everything else is one tap away.</p>
        <Btn to="/">Back to Home</Btn>
      </div>
    </section>
  );
}
