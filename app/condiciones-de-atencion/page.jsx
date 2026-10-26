import LegalPage, { LegalSection } from "../../components/LegalPage";

export const metadata = {
  title: "Condiciones de atención | Ampara Salud Mental",
  description: "Revisa las condiciones de reserva, pago, reagendamiento y atención médica online con la Dra. Ignacia Mendoza.",
};

export default function ConditionsPage() {
  return (
    <LegalPage
      kicker="Antes de reservar"
      title="Condiciones de atención"
      lead="Queremos que tengas información clara antes de reservar tu consulta. Aquí encontrarás las condiciones generales del agendamiento, pago y atención médica."
      nextLinks={[{ label: "Política de privacidad", href: "/politica-de-privacidad/" }, { label: "Derechos del paciente", href: "/derechos-del-paciente/" }]}
    >
      <LegalSection id="profesional" title="Profesional responsable">
        <p>Actualmente, las atenciones disponibles a través de Ampara Salud Mental son realizadas por la Dra. María Ignacia Mendoza Maureira. La disponibilidad, las características y el valor de cada consulta se informan al reservar.</p>
      </LegalSection>
      <LegalSection id="reservas" title="Reservas">
        <p>Las reservas se realizan mediante Encuadrado, con la cuenta profesional de la Dra. Mendoza. Al seleccionar un botón de reserva, se abre la plataforma para elegir el servicio, la fecha y la hora disponibles, y completar los pasos de confirmación.</p>
      </LegalSection>
      <LegalSection id="pagos" title="Pagos">
        <p>Los pagos se realizan por los medios habilitados por Encuadrado. El valor de la prestación se informa durante la reserva, antes de pagar. Los comprobantes y documentos tributarios correspondientes se gestionan según la operación vigente de la cuenta profesional de la Dra. Mendoza. La boleta puede presentarse para solicitar reembolso en Isapre; la cobertura y el monto dependen del plan de salud.</p>
      </LegalSection>
      <LegalSection id="cambios-hora" title="Cambios de hora">
        <p>Puedes cambiar tu hora con al menos 24 horas de anticipación respecto del horario reservado, sujeto a disponibilidad. Para reagendar, utiliza las opciones de Encuadrado o de la comunicación de confirmación que recibas. Los cambios solicitados con menos anticipación pueden quedar fuera de esta política de reagendamiento.</p>
      </LegalSection>
      <LegalSection id="cancelaciones" title="Cancelaciones y devoluciones">
        <p>Los pagos están sujetos a la política de cancelación informada durante la reserva. En caso de cancelación voluntaria o inasistencia del paciente, no se contempla la devolución del pago conforme a esas condiciones. Es posible cambiar la hora con al menos 24 horas de anticipación, sujeto a disponibilidad.</p>
        <p>Estas condiciones no excluyen los derechos que correspondan legalmente al paciente, en particular ante cobros indebidos, prestaciones no realizadas por causas atribuibles a la profesional u otras situaciones previstas por la normativa aplicable.</p>
      </LegalSection>
      <LegalSection id="cambios-profesional" title="Cambios por parte de la profesional">
        <p>Si por motivos imprevistos la profesional no pudiera realizar una consulta confirmada, se informará al paciente para coordinar una alternativa. Cuando legalmente corresponda, podrá ofrecerse una devolución u otra solución procedente.</p>
      </LegalSection>
      <LegalSection id="online" title="Atención online">
        <p>Para tu consulta online necesitas un dispositivo compatible, conexión a internet y un espacio que permita conversar con privacidad. Las instrucciones de acceso se comunicarán por los canales establecidos para la atención. La profesional podrá evaluar si la modalidad online es adecuada para tus necesidades clínicas.</p>
      </LegalSection>
      <LegalSection id="alcance" title="Alcance de la atención">
        <p>Las decisiones clínicas, indicaciones y tratamientos dependen de la evaluación individual realizada por la profesional. La atención médica no garantiza resultados específicos y no reemplaza los servicios de urgencia ante un riesgo inmediato.</p>
      </LegalSection>
      <LegalSection id="contacto" title="Contacto">
        <p>Si tienes dificultades con tu reserva o una consulta administrativa, puedes usar el canal de contacto disponible en este sitio. Para cambiar una hora, recomendamos utilizar primero las herramientas de Encuadrado.</p>
        <a className="btn btn-secondary" href="https://wa.me/56932266295" target="_blank" rel="noopener noreferrer">Contactar</a>
      </LegalSection>
      <LegalSection id="emergencias" title="Emergencias">
        <p>Ampara Salud Mental no ofrece atención de urgencia mediante este sitio ni su sistema de reservas. Ante una situación de riesgo inmediato, acude a un servicio de urgencias. En Chile, *4141 ofrece orientación gratuita las 24 horas para crisis asociadas al suicidio.</p>
      </LegalSection>
    </LegalPage>
  );
}
