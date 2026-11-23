// Hlavní komponenta: viditelný obsah aplikace.
// Zde je zobrazený název aplikace a ukázková navigace.

const navItems = ["Home", "Projects", "About", "Contact"];

export default function App() {
  return (
    <main className="app">
      <nav className="nav" aria-label="Hlavní navigace">
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a href={item === "Contact" ? "#contact" : "#"}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="hero">
        <h1>Garden Studio</h1>
        <p className="lead">
          Startovní projekt pro kurz Webdesign a UX/UI pro moderní webové
          aplikace.
        </p>
        <a className="button" href="#">
          Začít
        </a>
      </header>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__intro">
          <p className="eyebrow">Rádi vám pomůžeme</p>
          <h2 id="contact-title">Contact info</h2>
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
    </main>
  );
}
