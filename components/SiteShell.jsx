"use client";

import { useEffect, useRef, useState } from "react";

export const BOOKING_URL = "https://encuadrado.com/p/ignacia-mendoza/s/atencion-medica-en-salud-mental/embed/popup";
export const WHATSAPP_URL = "https://wa.me/56932266295";

export function BookingButton({ children = "Reserva aquí", className = "", onClick }) {
  return (
    <button
      type="button"
      className={`btn btn-primary encuadrado-btn ${className}`.trim()}
      data-encuadrado-popup=""
      data-url={BOOKING_URL}
      style={{ "--encuadrado-btn-bg": "#1F514C" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function SiteShell({ children, variant = "doctor-site" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shellRef = useRef(null);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 699px)");
    const desktop = window.matchMedia("(min-width: 1100px)");
    const updateMobile = () => setIsMobile(mobile.matches);
    const closeDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    updateMobile();
    mobile.addEventListener("change", updateMobile);
    desktop.addEventListener("change", closeDesktop);
    return () => {
      mobile.removeEventListener("change", updateMobile);
      desktop.removeEventListener("change", closeDesktop);
    };
  }, []);

  useEffect(() => {
    const regions = shellRef.current?.querySelectorAll("main, footer, .topbar, .contact-dock, .mobile-cta") ?? [];
    document.body.classList.toggle("menu-open", menuOpen);
    regions.forEach((region) => { region.inert = menuOpen; });
    if (menuOpen) navRef.current?.querySelector("a")?.focus();
    return () => {
      document.body.classList.remove("menu-open");
      regions.forEach((region) => { region.inert = false; });
    };
  }, [menuOpen]);

  useEffect(() => {
    const show = isMobile && !menuOpen;
    document.body.classList.toggle("has-mobile-cta", show);
    if (show && stickyRef.current) {
      document.body.style.setProperty("--mobile-cta-height", `${stickyRef.current.offsetHeight}px`);
    }
    return () => document.body.classList.remove("has-mobile-cta");
  }, [isMobile, menuOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      document.body.classList.add("keyboard-input");
      if (!menuOpen) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        toggleRef.current?.focus();
      } else if (event.key === "Tab") {
        const controls = [...headerRef.current.querySelectorAll("a, button")].filter((el) => el.getClientRects().length);
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onPointerDown = () => document.body.classList.remove("keyboard-input");
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onFocus = (event) => {
      const control = event.target;
      if (!control.matches("main a, main button, main summary, footer a") || !control.matches(":focus-visible")) return;
      requestAnimationFrame(() => {
        const rect = control.getBoundingClientRect();
        const dock = shellRef.current?.querySelector(".contact-dock")?.getBoundingClientRect();
        const cta = stickyRef.current?.getBoundingClientRect();
        const blockedByDock = dock && rect.right > dock.left && rect.left < dock.right && rect.bottom > dock.top && rect.top < dock.bottom;
        const blockedByCTA = isMobile && cta && rect.bottom > cta.top && rect.top < cta.bottom;
        if (blockedByDock || blockedByCTA || rect.top < headerRef.current.offsetHeight) {
          control.scrollIntoView({ block: "center", behavior: "instant" });
        }
      });
    };
    document.addEventListener("focusin", onFocus);
    return () => document.removeEventListener("focusin", onFocus);
  }, [isMobile]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={variant} ref={shellRef}>
      <a className="skip-link" href="#contenido-principal">Saltar al contenido principal</a>
      <div className="topbar">Atención médica en salud mental · Online para Chile</div>
      <div className="site-header" ref={headerRef}>
        <header>
          <div className="container navbar">
            <a className="brand" href="/#inicio" aria-label="Ampara Salud Mental, inicio" onClick={closeMenu}>
              <img className="brand-logo" src="/assets/ampara-logo-horizontal-transparent.png" width="390" height="140" alt="Ampara Salud Mental" />
            </a>
            <nav id="mainNav" className={menuOpen ? "open" : ""} aria-label="Navegación principal" ref={navRef}>
              <a href="/#motivos" onClick={closeMenu}>Motivos de consulta</a>
              <a href="/#doctora" onClick={closeMenu}>La doctora</a>
              <a href="/#consulta" onClick={closeMenu}>La consulta</a>
              <a href="/#faq" onClick={closeMenu}>Preguntas frecuentes</a>
              <BookingButton onClick={closeMenu}>Reserva aquí</BookingButton>
            </nav>
            <button type="button" className="mobile-toggle" id="mobileToggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-controls="mainNav" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} ref={toggleRef}>{menuOpen ? "✕" : "☰"}</button>
          </div>
        </header>
      </div>
      <div className="menu-backdrop" hidden={!menuOpen} aria-hidden="true" onClick={closeMenu} />
      {children}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand" href="/#inicio" aria-label="Ampara Salud Mental, inicio">
                <img className="brand-logo" src="/assets/ampara-logo-horizontal-transparent.png" width="390" height="140" loading="lazy" alt="Ampara Salud Mental" />
              </a>
              <p>Cuidado profesional, trato humano.</p>
            </div>
            <div className="footer-col"><h2>Atención médica</h2><a href="/#motivos">Motivos de consulta</a><a href="/#consulta">La consulta</a><a href="/#agenda">Reservas</a></div>
            <div className="footer-col"><h2>Ampara</h2><a href="/#doctora">Dra. Ignacia Mendoza</a><a href="/#faq">Preguntas frecuentes</a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Contacto</a></div>
            <div className="footer-col"><h2>Información y políticas</h2><a href="/politica-de-privacidad/">Política de privacidad</a><a href="/condiciones-de-atencion/">Condiciones de atención</a><a href="/derechos-del-paciente/">Derechos del paciente</a></div>
          </div>
          <p className="footer-care-note">Las atenciones médicas son realizadas por la Dra. María Ignacia Mendoza Maureira. Las reservas y pagos se gestionan mediante su cuenta profesional de Encuadrado.</p>
          <div className="footer-bottom">
            <span>© 2026 Ampara Salud Mental. Todos los derechos reservados.</span>
            <span className="crisis-note">Este sitio no ofrece atención de urgencia. Ante una situación de riesgo inmediato, acude a un servicio de urgencias. En Chile, *4141 entrega orientación gratuita las 24 horas para crisis asociadas al suicidio.</span>
          </div>
        </div>
      </footer>
      <aside className="contact-dock" aria-label="Contacto por WhatsApp">
        <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Escribir a la Dra. Ignacia Mendoza por WhatsApp">
          <span className="whatsapp-icon"><img src="/assets/whatsapp-color-svgrepo-com.svg" width="44" height="44" alt="" /></span>
          <span className="whatsapp-label" aria-hidden="true">Escríbenos</span>
        </a>
      </aside>
      <div className="mobile-cta" hidden={!isMobile || menuOpen} ref={stickyRef}><BookingButton>Reserva aquí</BookingButton></div>
    </div>
  );
}
