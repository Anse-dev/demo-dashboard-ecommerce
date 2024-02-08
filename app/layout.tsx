import './ui/global.css';
import { inter, lusitana, kanit } from './ui/fonts';
import Header from './ui/header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
