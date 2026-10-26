import SiteShell, { BookingButton, WHATSAPP_URL } from "../components/SiteShell";
import HomeEnhancements from "../components/HomeEnhancements";

export const metadata = {
  title: "Dra. Ignacia Mendoza · Salud mental online | Ampara",
  description: "Ampara: atención médica online en salud mental con la Dra. Ignacia Mendoza, médica general. Telemedicina para Chile, 30 minutos aproximadamente, $45.000 CLP.",
};

const topics = ["Ansiedad", "Estrés", "Sobrecarga laboral", "Agotamiento", "Ánimo bajo", "Alteraciones del sueño"];
const reviews = [
  { author: "MARIA E.", text: "Excelente atención, empática, sabe escuchar, explica con calma y lenguaje sencillo" },
  { author: "José D.", text: "Creo que en todo el periplo reciente que me ha llevado de doctor en doctor, por fin encuentro a una doctora con una visón humana y cercana, se agradece el rigor médico, certeza en conceptos y explicaciones. Gracias por su atención y acompañamiento." },
  { author: "Karla M.", text: "Excelente atención, empatica, explica con mucha claridad y te hace sentir en confianza. Muy recomendada :)" },
  { author: "Catherine R.", text: "Me sentí tranquila y prestó atención a lo que necesitaba, es muy amable" },
  { author: "Monserrat C.", text: "Escucha con atención y está pendiente a todas las inquietudes. Empática" },
];

export default function HomePage() {
  return (
    <SiteShell>
      <noscript><p className="container"><a href="#doctora">Conoce a la doctora</a> · <a href="#consulta">La consulta</a> · <a href="#agenda">Reservas</a></p></noscript>
      <main id="contenido-principal" tabIndex={-1}>
        <section className="hero" id="inicio" aria-labelledby="hero-heading">
          <div className="container hero-grid">
            <div>
              <h1 id="hero-heading">Tu salud mental merece <span className="hero-title-accent">tiempo y cuidado.</span></h1>
              <p className="lead">Evaluación y seguimiento médico online, con una atención cercana, confidencial y sin prejuicios.</p>
              <dl className="consultation-facts" aria-label="Información de la consulta">
                <div><dt>Telemedicina</dt><dd>$45.000 <span>CLP</span></dd></div>
                <div><dt>Duración</dt><dd>30 min <span>aprox.</span></dd></div>
              </dl>
              <div className="hero-actions">
                <BookingButton className="btn-arrow">Reserva aquí</BookingButton>
                <a className="btn btn-secondary" href="#doctora">Conoce a la doctora</a>
              </div>
            </div>
            <figure className="doctor-portrait">
              <img src="/assets/dra-ignacia-960.webp" srcSet="/assets/dra-ignacia-480.webp 480w, /assets/dra-ignacia-960.webp 960w" sizes="(min-width: 1100px) 410px, (min-width: 700px) 320px, (min-width: 480px) 300px, calc(100vw - 40px)" width="1086" height="1448" fetchPriority="high" decoding="async" alt="Dra. Ignacia Mendoza, médica general, con uniforme médico junto a su computador." />
              <figcaption><strong>Dra. Ignacia Mendoza</strong><span>Médica general / Salud mental</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="services" id="motivos" aria-labelledby="motivos-heading">
          <div className="container">
            <div className="section-head">
              <h2 id="motivos-heading">Puedes empezar por lo que te preocupa</h2>
              <p className="section-copy">Un espacio para evaluar cómo te sientes y definir los próximos pasos de tu atención.</p>
            </div>
            <ul className="topic-cloud doctor-topics" aria-label="Motivos de consulta médica">
              {topics.map((topic) => <li className="topic" key={topic}>{topic}</li>)}
            </ul>
            <p className="scope-note">La consulta es de medicina general con foco en salud mental. No corresponde a una sesión de psicoterapia ni a una consulta de especialidad en psiquiatría.</p>
          </div>
        </section>

        <section id="doctora" aria-labelledby="doctora-heading">
          <div className="container doctor-about">
            <div>
              <h2 id="doctora-heading">Conoce a Ignacia</h2>
              <p className="experience-note"><strong>Más de 6 años</strong><span>de experiencia en atención integral de salud física y mental.</span></p>
            </div>
            <div className="doctor-bio">
              <p>Soy Ignacia Mendoza, médica general chilena, dedicada actualmente al área de salud mental.</p>
              <p>Ofrezco un espacio seguro, confidencial y sin prejuicios, con un enfoque cercano y humano. Realizo evaluación y seguimiento de dificultades que pueden afectar tu bienestar.</p>
              <a className="service-link btn-arrow" href="#consulta">Cómo es la consulta</a>
            </div>
          </div>
        </section>

        <section className="reviews" id="opiniones" aria-labelledby="opiniones-heading">
          <div className="container">
            <div className="reviews-heading"><div><h2 id="opiniones-heading">Lo que dicen sobre la atención</h2><p className="section-copy">Experiencias compartidas por quienes se han atendido con Ignacia.</p></div></div>
            <p className="sr-only" id="reviews-help">Las reseñas avanzan automáticamente. También puedes deslizar la lista horizontalmente.</p>
            <ul className="reviews-track" id="reviews-track" tabIndex={0} aria-label="Cinco reseñas sobre la atención" aria-describedby="reviews-help">
              {reviews.map((review) => (
                <li className="review-card" key={review.author}>
                  <p className="review-author">{review.author}</p>
                  <span className="review-stars" role="img" aria-label="5 de 5 estrellas">★★★★★</span>
                  <p className="review-text">{review.text}</p>
                </li>
              ))}
            </ul>
            <p className="review-source"><a href="https://encuadrado.com/p/ignacia-mendoza#evaluaciones" target="_blank" rel="noopener noreferrer">Ver todas las evaluaciones en Encuadrado ↗</a></p>
          </div>
        </section>

        <section className="how" id="consulta" aria-labelledby="consulta-heading">
          <div className="container">
            <div className="section-head"><h2 id="consulta-heading">Una consulta para comprender y acompañar</h2><p className="section-copy">Telemedicina para Chile, de aproximadamente 30 minutos.</p></div>
            <div className="steps">
              <article className="step"><h3>Evaluación médica</h3><p>Conversamos sobre lo que estás viviendo y evaluamos tus síntomas y necesidades.</p></article>
              <article className="step"><h3>Un plan según tu situación</h3><p>La atención puede incluir exámenes, tratamiento farmacológico y orientación no farmacológica, según la evaluación clínica.</p><p>Licencia médica y receta cheque se consideran solo cuando corresponden, según la evaluación clínica.</p></article>
              <article className="step"><h3>Seguimiento</h3><p>El seguimiento médico permite revisar tu evolución y las necesidades de tu atención.</p></article>
            </div>
          </div>
        </section>

        <section className="booking" id="agenda" aria-labelledby="agenda-heading">
          <div className="container"><div className="booking-shell">
            <div className="booking-copy">
              <span className="status-label">Agenda online</span>
              <h2 id="agenda-heading">Tu consulta con la Dra. Ignacia Mendoza</h2>
              <p className="booking-price">$45.000 <span>CLP · Telemedicina</span></p>
              <p className="reimbursement-note"><strong>Boleta para solicitar reembolso en Isapre.</strong> La cobertura y el monto dependen de tu plan de salud.</p>
              <p className="section-copy">30 minutos aproximadamente. Consulta las horas disponibles y completa tu reserva en Encuadrado.</p>
            </div>
            <div className="booking-embed"><div className="embed-placeholder">
              <h3>Elige tu hora</h3>
              <p>Al seleccionar «Ver horas», se abrirá el agendamiento de Encuadrado.</p>
              <BookingButton>Ver horas</BookingButton>
              <p className="booking-disclosure">Las consultas son realizadas por la Dra. María Ignacia Mendoza Maureira. Las reservas y pagos se gestionan mediante Encuadrado.<br />Puedes cambiar tu hora con al menos 24 horas de anticipación, sujeto a disponibilidad. Revisa las <a href="/condiciones-de-atencion/">condiciones de atención</a> antes de reservar.</p>
              <div className="overbooking-note"><h3>¿No encuentras una hora?</h3><p>Si no encuentras horas disponibles, puedes consultar por sobrecupos directamente con la doctora. Un cupo adicional dependerá de su disponibilidad.</p><a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a></div>
            </div></div>
          </div></div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-head"><h2 id="faq-heading">Antes de tu consulta</h2></div>
            <div className="faq-grid">
              <details><summary>¿La doctora es psiquiatra?</summary><p>La Dra. Ignacia Mendoza es médica general, dedicada al área de salud mental. Esta atención no es una consulta de especialidad en psiquiatría.</p></details>
              <details><summary>¿Cuánto cuesta y cuánto dura?</summary><p>La consulta por telemedicina cuesta $45.000 CLP y dura aproximadamente 30 minutos. Recibirás una boleta con la que puedes solicitar reembolso a tu Isapre; la cobertura y el monto dependen de tu plan.</p></details>
              <details><summary>¿La consulta incluye medicamentos o licencia médica?</summary><p>El tratamiento farmacológico, la solicitud de exámenes y la emisión de licencia médica dependen de la evaluación clínica y se indican cuando corresponda.</p></details>
              <details><summary>¿Qué pasa si no hay horas disponibles?</summary><p>Puedes escribir por WhatsApp para consultar por sobrecupos. No se garantiza disponibilidad adicional.</p></details>
              <details><summary>¿Cómo se resguarda mi información?</summary><p>La doctora ofrece atención confidencial. Al reservar, ingresarás tus datos en Encuadrado; revisa sus condiciones y política de privacidad antes de confirmar.</p></details>
              <details><summary>¿Es un servicio de urgencia?</summary><p>No. Ampara no ofrece atención de urgencia ni respuesta inmediata ante crisis. Si existe riesgo inmediato para ti o para otra persona, busca atención de urgencia presencial o contacta los servicios de emergencia de tu zona.</p></details>
            </div>
          </div>
        </section>
      </main>
      <HomeEnhancements />
    </SiteShell>
  );
}
