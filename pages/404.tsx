import Link from 'next/link';
import styles from '../styles/Main.module.css';


export default function ErrorPage() {
  return (
    <>
      <main className={styles.main}>
        <h1>There is no such a page here, fellow</h1>
        <Link href="/">
          <button style={{ padding: '10px' }}>Go to The Main Page</button>
        </Link>
      </main>
    </>
  );
}
