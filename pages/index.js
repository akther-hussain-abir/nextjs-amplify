import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devoret - Online Restaurant Management System</title>
        <meta name="description" content="Digital agency to manage online ordering and EPOS system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://devoret.com">Devoret</a>
        </h1>

        <p className={styles.description}>
          Website is under maintanance.
        </p>
      </main>
    </div>
  )
}
