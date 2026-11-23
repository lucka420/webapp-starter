import type { ComponentType } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function HomePage() {
  return (
    <header className="hero">
      <p className="eyebrow">Zeleň, která patří k vám</p>
      <h1>Garden Studio</h1>
      <p className="lead">
        Navrhujeme venkovní prostory, ve kterých se dobře žije, odpočívá a
        tráví čas s blízkými.
      </p>
      <a className="button" href="/projects">Prohlédnout projekty</a>
    </header>
  );
}
function ProjectsPage() {
  return (
    <section className="page-section" aria-labelledby="projects-title">
      <p className="eyebrow">Nápady pro vaši zahradu</p>
      <h1 id="projects-title">Projects</h1>
      <p className="lead">
        Každý venkovní prostor může být příjemným místem k odpočinku. Tady
        najdete několik směrů, kterými se může návrh ubírat.
      </p>
      <div className="project-grid">
        <article className="project-card">
          <span className="project-card__number">01</span>
          <h2>Klidné zákoutí</h2>
          <p>Soukromé místo k posezení, doplněné zelení a jemnými texturami.</p>
        </article>
        <article className="project-card">
          <span className="project-card__number">02</span>
          <h2>Městská terasa</h2>
          <p>Promyšlené nádoby, vrstvené výsadby a pohodlí i na menší ploše.</p>
        </article>
        <article className="project-card">
          <span className="project-card__number">03</span>
          <h2>Přírodní zahrada</h2>
          <p>Uvolněná výsadba, která propojuje sezónní barvy a život v zahradě.</p>
        </article>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="page-section" aria-labelledby="about-title">
      <p className="eyebrow">O studiu</p>
      <h1 id="about-title">About</h1>
      <p className="lead">
        Garden Studio přistupuje k zahradě jako k přirozenému pokračování
        domova. Návrhy propojují potřeby lidí, charakter místa a rostliny,
        které v něm mohou dobře prospívat.
      </p>
      <div className="about-note">
        <h2>Prostor, který dává smysl</h2>
        <p>
          Začínáme nasloucháním tomu, jak chcete zahradu používat. Potom hledáme
          jednoduché řešení, které respektuje místo a působí přirozeně v každém
          ročním období.
        </p>
      </div>
      <a className="text-link" href="/contact">Pojďme probrat váš nápad →</a>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <div className="contact__intro">
        <p className="eyebrow">Rádi vám pomůžeme</p>
        <h1 id="contact-title">Contact info</h1>
        <p className="lead">
          Máte otázku nebo chcete probrat svůj zahradní projekt? Napište nám
          a ozveme se vám.
        </p>
      </div>

      <form className="contact-form">
        <label htmlFor="contact-name">Jméno</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required />

        <label htmlFor="contact-email">E-mail</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />

        <label htmlFor="contact-message">Zpráva</label>
        <textarea id="contact-message" name="message" rows={5} required />

        <p className="form-note">Formulář zatím není napojený na odesílání zpráv.</p>
        <button className="button" type="button" disabled>Odeslat zprávu</button>
      </form>
    </section>
  );
}

const pages: Record<string, { component: ComponentType }> = {
  "/": { component: HomePage },
  "/projects": { component: ProjectsPage },
  "/about": { component: AboutPage },
  "/contact": { component: ContactPage },
};

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const page = pages[pathname] ?? pages["/"];
  const Page = page.component;

  return (
    <div className="app">
      <nav className="nav" aria-label="Hlavní navigace">
        <a className="nav__brand" href="/" aria-label="Garden Studio — Home">
          Garden Studio
        </a>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="page-content">
        <Page />
      </main>

      <footer className="site-footer">
        <span>Garden Studio</span>
        <a href="/contact">Napište nám</a>
      </footer>
    </div>
  );
}
