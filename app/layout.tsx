import "./globals.css";
import { Playfair_Display } from "next/font/google";

const festive = Playfair_Display({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={festive.className}>
        {children}
      </body>
    </html>
  );
}
