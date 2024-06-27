import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const generalSans = localFont({
  src: [
    {
      path: "../assets/fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../assets/fonts/GeneralSans-Semibold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../assets/fonts/GeneralSans-Medium.otf",
      weight: "500",
      style: "normal"
    },
  ]
});

export const metadata: Metadata = {
  title: "Job Board",
  description: "This is a job board dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={generalSans.className}>{children}</body>
    </html>
  );
}
