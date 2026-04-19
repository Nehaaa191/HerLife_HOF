import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingChatWrapper from "../components/chat/FloatingChatWrapper";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Her Life | Empowerment & Health",
  description: "A modern platform focused on women's health across all life stages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        {children}
        <FloatingChatWrapper />
      </body>
    </html>
  );
}
