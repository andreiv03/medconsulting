import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

import { LayoutProvider } from "@/contexts/layout-context";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Label from "@/components/label";
import "@/styles/globals.scss";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MED Consulting",
  description: "MED Consulting - Your Trusted Partner in Medical Solutions",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#6633cc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <LayoutProvider>
          <Label />
          <Header />
          <Menu />
          <div className="page">{children}</div>
          <Footer />
        </LayoutProvider>
      </body>
    </html>
  );
}
