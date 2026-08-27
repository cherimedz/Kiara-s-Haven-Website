import { Fraunces, Montserrat, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Kiara's Haven",
  description:
    "A concept animal-adoption-center site, and the community havens it inspired — a demo project, not a real organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${montserrat.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
