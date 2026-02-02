import type { Metadata } from "next";
import { Space_Grotesk, Oswald } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gorilla Arena | Bet on your feet",
  description: "The only fitness game that pays you to walk (and roasts you if you don't).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${oswald.variable} antialiased bg-background-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}

