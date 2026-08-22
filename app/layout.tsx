import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Vistar City | Residential Plots & Land Projects in Bihar',
  description: 'Explore residential plots and plotted development projects across Patna, Muzaffarpur, Raxaul and other growing locations with Vistar City.',
  openGraph: {
    title: 'Vistar City | Residential Plots & Land Projects in Bihar',
    description: 'Explore residential plots and plotted development projects across Patna, Muzaffarpur, Raxaul and other growing locations with Vistar City.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vistar City | Residential Plots & Land Projects in Bihar',
    description: 'Explore residential plots and plotted development projects across Patna, Muzaffarpur, Raxaul and other growing locations with Vistar City.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
