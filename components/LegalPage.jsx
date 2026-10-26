import SiteShell from "./SiteShell";

export function LegalSection({ id, title, children }) {
  return <section className="legal-section" aria-labelledby={id}><h2 id={id}>{title}</h2>{children}</section>;
}

export default function LegalPage({ kicker, title, lead, updated, children, nextTitle = "También puedes revisar", nextLinks = [] }) {
  return (
    <SiteShell variant="legal-page">
      <main id="contenido-principal" tabIndex={-1}>
        <div className="legal-hero"><div className="container">
          <p className="legal-kicker">{kicker}</p>
          <h1>{title}</h1>
          <p className="legal-lead">{lead}</p>
          {updated && <p className="legal-updated">Última actualización: {updated}.</p>}
        </div></div>
        <div className="container legal-body">
          {children}
          {nextLinks.length > 0 && <div className="legal-next"><h2>{nextTitle}</h2><div className="legal-next-links">{nextLinks.map((link) => <a key={link.href} href={link.href} className={link.className} target={link.target} rel={link.rel}>{link.label}</a>)}</div></div>}
        </div>
      </main>
    </SiteShell>
  );
}
