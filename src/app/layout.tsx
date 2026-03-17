import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
