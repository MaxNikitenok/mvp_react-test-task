import './globals.css';
import { Tektur } from 'next/font/google';
import styles from './layout.module.css';
import Link from 'next/link';

const tektur = Tektur({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tektur.className}>
        <header className={styles.header}>
          <div className={styles.title}>
            <Link href={`/`}>
              <h1 className={styles.logo}>BeTBeT</h1>
            </Link>
            <h2>Ставки на спорт</h2>
            <h6>почти легально</h6>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
