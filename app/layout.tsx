import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Unified Social Development Foundation (USDF) | India",
  description:
    "USDF is a Section 8 nonprofit based in Uttarakhand, India. Explore our mission, six focus areas, leadership and registration details.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Unified Social Development Foundation (USDF)",
    description:
      "A Section 8 nonprofit in Uttarakhand, India, focused on inclusive social development.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable + " " + playfair.variable}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
