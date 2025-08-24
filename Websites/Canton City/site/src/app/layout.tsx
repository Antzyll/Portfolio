import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter, Zhi_Mang_Xing } from "next/font/google";
import RevealInit from "@/components/RevealInit";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const zhifont = Zhi_Mang_Xing({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zhifont",
});

export const metadata: Metadata = {
  title: "Canton City",
  description: "Chinese Takeaway in Tring",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${zhifont.variable}`}>
      <body className="min-h-dvh bg-brand-cream text-slate-800 antialiased">
        <RevealInit />
 
 {/* Floating lanterns */}
<div className="lantern-vert left-[15%]" style={{ animationDuration: "40s", animationDelay: "0s" }}>
  <img src="/icons/lantern.svg" alt="" className="lantern-sway" />
</div>

<div className="lantern-vert left-[50%]" style={{ animationDuration: "55s", animationDelay: "10s" }}>
  <img src="/icons/lantern.svg" alt="" className="lantern-sway" />
</div>

<div className="lantern-vert left-[75%]" style={{ animationDuration: "50s", animationDelay: "20s" }}>
  <img src="/icons/lantern.svg" alt="" className="lantern-sway" />
</div>

 
   {children}
      </body>
    </html>
  );
}
