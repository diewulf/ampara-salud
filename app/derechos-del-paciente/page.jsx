import LegalPage, { LegalSection } from "../../components/LegalPage";

export const metadata = {
  title: "Derechos del paciente | Ampara Salud Mental",
  description: "Conoce tus derechos como paciente en Chile y nuestro compromiso con una atención respetuosa, informada y confidencial.",
};

export default function PatientRightsPage() {
  return (
    <LegalPage
      kicker="Atención con respeto"
      title="Tus derechos como paciente"
      lead="En Ampara creemos que la atención en salud mental debe desarrollarse desde el respeto, la confianza y la información clara. En Chile, la Ley N.º 20.584 reconoce derechos a las personas durante la atención de salud, incluida la que se realiza a distancia."
      nextTitle="¿Necesitas ayuda con tu atención?"
      nextLinks={[{ label: "Contactar", href: "https://wa.me/56932266295", className: "btn btn-secondary", target: "_blank", rel: "noopener noreferrer" }]}
    >
      <LegalSection id="trato" title="Trato digno y respetuoso">
        <p>Tienes derecho a recibir un trato respetuoso, sin discriminación arbitraria, resguardando tu dignidad y privacidad.</p>
      </LegalSection>
      <LegalSection id="informacion" title="Información clara">
        <p>Tienes derecho a recibir información comprensible sobre tu atención y a conocer las características y valores de las prestaciones que contratas.</p>
      </LegalSection>
      <LegalSection id="privacidad" title="Privacidad y confidencialidad">
        <p>Tus antecedentes personales y clínicos deben tratarse con la confidencialidad y las medidas de protección que exige la normativa aplicable.</p>
      </LegalSection>
      <LegalSection id="decisiones" title="Participación en decisiones">
        <p>Tienes derecho a recibir información adecuada para participar en las decisiones sobre tu salud y aceptar o rechazar tratamientos cuando corresponda legalmente.</p>
      </LegalSection>
      <LegalSection id="seguridad" title="Seguridad de la atención">
        <p>Tienes derecho a recibir atención en condiciones apropiadas de seguridad y calidad, de acuerdo con la modalidad utilizada y la normativa aplicable.</p>
      </LegalSection>
      <LegalSection id="reclamos" title="Consultas y reclamos">
        <p>Si consideras que alguno de tus derechos no ha sido respetado, puedes comunicar tu inquietud a la profesional tratante y utilizar los mecanismos de reclamación previstos por la normativa vigente.</p>
      </LegalSection>
      <LegalSection id="mas-informacion" title="Más información">
        <p>Consulta la <a href="https://www.superdesalud.gob.cl/preguntas-frecuentes/cuales-son-los-derechos-de-las-personas-en-su-atencion-de-salud/" target="_blank" rel="noopener noreferrer">información oficial de la Superintendencia de Salud sobre derechos de las personas en su atención</a>.</p>
      </LegalSection>
    </LegalPage>
  );
}
