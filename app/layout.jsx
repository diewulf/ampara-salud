import "./styles/base.css";
import "./styles/components.css";
import "./styles/sections.css";
import "./styles/motion.css";
import "./styles/doctor.css";
import "./styles/legal.css";

export const metadata = {
  title: "Ampara Salud Mental",
  icons: { icon: "/assets/ampara-mark-transparent.png" },
};

export const viewport = { themeColor: "#f7f6f2" };

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <script src="https://encuadrado.com/p/embed.js" defer />
      </body>
    </html>
  );
}
