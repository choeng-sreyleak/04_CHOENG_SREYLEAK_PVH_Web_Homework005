// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Item management dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
