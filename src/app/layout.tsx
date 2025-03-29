import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";

export const metadata: Metadata = {
  title: "Hyun_dev",
  description: "이현준 개발 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
