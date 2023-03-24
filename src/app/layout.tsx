import "./globals.css";
import React from "react";

export const metadata = {
  title: "WEGO EATS",
  description: "Food delivery platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-sm">{children}</body>
    </html>
  );
}
