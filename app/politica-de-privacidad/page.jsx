import LegalPage, { LegalSection } from "../../components/LegalPage";

export const metadata = {
  title: "Política de privacidad | Ampara Salud Mental",
  description: "Conoce cómo Ampara Salud Mental gestiona la privacidad de sus visitantes y cómo funcionan las plataformas externas de reservas y contacto.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="Información y políticas"
      title="Política de privacidad"
      lead="En Ampara Salud Mental respetamos tu privacidad y queremos que tengas claridad sobre el funcionamiento de este sitio y los servicios externos que facilitan las reservas y el contacto."
      updated="23 de octubre de 2026"
      nextLinks={[{ label: "Condiciones de atención", href: "/condiciones-de-atencion/" }, { label: "Derechos del paciente", href: "/derechos-del-paciente/" }]}
    >
      <LegalSection id="sobre-sitio" title="Sobre este sitio">
        <p>Ampara Salud Mental es un sitio informativo que presenta los servicios de atención médica de la Dra. María Ignacia Mendoza Maureira. El sitio no solicita directamente antecedentes clínicos, no administra fichas de pacientes y no procesa pagos por consultas. Las reservas y pagos se realizan mediante Encuadrado.</p>
      </LegalSection>
      <LegalSection id="reservas-pagos" title="Reservas y pagos">
        <p>Al seleccionar un botón de reserva, se abre el proceso de agendamiento de Encuadrado. Allí puedes consultar disponibilidad, elegir una atención e ingresar los datos necesarios para reservar y pagar.</p>
        <p>La información que entregues en ese proceso se trata conforme a las políticas de Encuadrado y a las responsabilidades que correspondan a la profesional tratante. Este sitio no recibe directamente los datos de pago ingresados en Encuadrado.</p>
        <p>Consulta la <a href="https://encuadrado.com/privacidad/politica-de-privacidad" target="_blank" rel="noopener noreferrer">política de privacidad de Encuadrado</a> y sus <a href="https://encuadrado.com/privacidad/terminos-de-servicio-pacientes" target="_blank" rel="noopener noreferrer">términos para pacientes</a>.</p>
      </LegalSection>
      <LegalSection id="contacto-whatsapp" title="Contacto mediante WhatsApp">
        <p>El sitio permite contactar a la Dra. Mendoza por WhatsApp. La información que compartas por ese canal está sujeta también a las condiciones y políticas de privacidad de WhatsApp.</p>
        <p>Para consultas generales por mensajería, te recomendamos no enviar diagnósticos, exámenes ni otros antecedentes clínicos sensibles, salvo que la profesional te indique un procedimiento adecuado para hacerlo.</p>
      </LegalSection>
      <LegalSection id="datos-tecnicos" title="Datos técnicos de navegación">
        <p>La entrega del sitio puede implicar tratamiento de datos técnicos de navegación por parte del proveedor de alojamiento, como la dirección IP y los datos necesarios para mostrar el contenido y proteger el servicio. El proveedor de alojamiento de la versión pública aún debe confirmarse.</p>
        <p>El sitio carga tipografías desde Google Fonts y el script de reservas de Encuadrado. Esos servicios externos pueden recibir datos técnicos al cargarse. En el código actual no se detectaron herramientas propias de analítica o publicidad, ni uso propio de cookies o almacenamiento local.</p>
      </LegalSection>
      <LegalSection id="derechos-datos" title="Derechos y consultas sobre datos personales">
        <p>Puedes solicitar información y ejercer los derechos que correspondan conforme a la legislación chilena. Para información de reservas o antecedentes clínicos, utiliza los canales de Encuadrado o contacta a la Dra. Mendoza, según corresponda.</p>
        <p>Para consultas generales sobre el sitio puedes usar el <a href="https://wa.me/56932266295" target="_blank" rel="noopener noreferrer">contacto por WhatsApp</a>. La identificación legal de quien opera el sitio está pendiente de validación antes de publicarlo.</p>
      </LegalSection>
      <LegalSection id="actualizaciones" title="Actualizaciones">
        <p>Esta política podrá actualizarse cuando cambien las funcionalidades del sitio, los servicios tecnológicos utilizados o la normativa aplicable. La versión vigente estará disponible en esta página.</p>
      </LegalSection>
    </LegalPage>
  );
}
