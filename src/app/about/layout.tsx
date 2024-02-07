import styles from './styles.module.css';
import Link from 'next/link';

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
        <Link href='/'>Link to Homepage</Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
