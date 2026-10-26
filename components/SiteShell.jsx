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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.13 1.88 2.87 4.56 4.03.64.27 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.24-.18-.51-.31z" />
      <path d="M16.03 3C8.86 3 3.03 8.79 3.03 15.91c0 2.28.6 4.5 1.74 6.45L3 29l6.83-1.79a13.1 13.1 0 0 0 6.2 1.57h.01c7.17 0 13-5.79 13-12.91C29.04 8.79 23.21 3 16.03 3zm0 23.6h-.01a10.93 10.93 0 0 1-5.57-1.52l-.4-.24-4.05 1.06 1.08-3.92-.26-.4a10.63 10.63 0 0 1-1.67-5.67c0-5.94 4.88-10.77 10.89-10.77 6 0 10.88 4.83 10.88 10.77 0 5.94-4.88 10.69-10.89 10.69z" />
    </svg>
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
          <span className="whatsapp-icon"><WhatsAppIcon /></span>
          <span className="whatsapp-label" aria-hidden="true">Escríbenos</span>
        </a>
      </aside>
      <div className="mobile-cta" hidden={!isMobile || menuOpen} ref={stickyRef}><BookingButton>Reserva aquí</BookingButton></div>
    </div>
  );
}
