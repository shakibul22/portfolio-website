import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: "Software company portfolio-Web,App AI, development",
  description: "Leverage the cost-effective Web, App, and Software development services in our company at just $10 per hour! Let's check out our portfolio and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       {children}
      </body>
    </html>
  );
}
