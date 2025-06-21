import type { Metadata } from 'next';
import { Russo_One, Ubuntu } from 'next/font/google';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

import './css/reset.css';
import './css/variables.css';
import './css/globals.css';
import styles from './layout.module.css';

const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: 'normal',
});

const russo_one = Russo_One({
  variable: '--font-russo-one',
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'SkillMate',
  description: 'Lazar Gay',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${russo_one.variable} ${ubuntu.variable}`}>
        <div className={styles.site}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
