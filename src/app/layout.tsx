import type { Metadata } from "next";
import { JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedLayout from "@/components/AnimatedLayout";
import { ModeProvider } from "@/components/ModeContext";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameWeaver - Zainab Ali",
  description: "Portfolio showcasing my work.",
};

const SET_MODE_SCRIPT = `
(function () {
  try {
    var mode = localStorage.getItem("mode");
    if (mode !== "gamedev" && mode !== "backend") mode = "gamedev";
    document.documentElement.setAttribute("data-mode", mode);
  } catch (e) {
    document.documentElement.setAttribute("data-mode", "gamedev");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="gamedev">
      <head>
        <Script id="set-mode" strategy="beforeInteractive">
          {SET_MODE_SCRIPT}
        </Script>
      </head>
      <body
        className={`${jetbrainsMono.variable} ${sourceSerif.variable} antialiased font-serif`}
      >
        <ModeProvider>
          <Navigation />
          <main className="pt-24">
            <AnimatedLayout>
              {children}
            </AnimatedLayout>
          </main>
          <Footer />
        </ModeProvider>
      </body>
    </html>
  );
}
