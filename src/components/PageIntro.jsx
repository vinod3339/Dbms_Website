import { usePageTitle } from "../hooks/usePageTitle";

export default function PageIntro({ kicker, title, lede, children }) {
  usePageTitle(title);

  return (
    <header className="page-intro">
      {kicker && <p className="kicker">{kicker}</p>}
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </header>
  );
}
