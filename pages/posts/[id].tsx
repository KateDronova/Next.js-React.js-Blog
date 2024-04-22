import Link from 'next/link';
// import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import styles from '../../styles/Main.module.css';

// const inter = Inter({ subsets: ['latin'] });

export default function Post() {
  const router = useRouter();

  return (
    <>
      <main className={`${styles.main}`}>
        <h1>Post {router.query.id}</h1>
        <Link href="/">
          <button style={{ padding: '10px' }}>Go to The Main Page</button>
        </Link>
      </main>
    </>
  );
}
