import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Best Hotels with Jacuzzi in Room | BestJacuzziHotels.com",
    template: "%s | BestJacuzziHotels.com",
  },
  description:
    "Find the best hotels with private jacuzzi and whirlpool rooms in top US cities. Compare prices, read reviews, and book your perfect jacuzzi suite today.",
  metadataBase: new URL("https://bestjacuzzihotels.com"),
  openGraph: {
    title: "Best Hotels with Jacuzzi in Room 2026 | BestJacuzziHotels.com",
    description: "Find the best hotels with private jacuzzi and whirlpool rooms in top US cities. Compare prices, read reviews, and book your perfect jacuzzi suite today.",
    url: "https://www.bestjacuzzihotels.com",
    type: "website",
    locale: "en_US",
    siteName: "BestJacuzziHotels.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
