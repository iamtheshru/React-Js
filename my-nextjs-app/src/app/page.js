import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/contact">
          <span>Contact Us</span>
        </Link>
        <Link href="/aboutus">
          <span>About Us</span>
        </Link>
      </div>
    </main>
  )
}
