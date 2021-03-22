import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Milja Lempinen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my intro page
        </h1>

        <p className={styles.description}>
          This is a web-page created to showcase my personal projects.
        </p>

        <div className={styles.grid}>
          <p>
            <Link href="/about/me" >  
            <a className={styles.link}>Here</a>
            </Link>
            {' '}you can learn more about me! 
          </p>
          <p>
            <Link href="/about/previousThings" >  
            <a className={styles.link}>Here</a>
            </Link>
            {' '}you can have a look at my previous projects! 
          </p>
          <p>
            Check out my LinkedIn and let's connect!
          </p>
          <a href="https://www.linkedin.com/in/milja-lempinen" target="_blank">
          <Image src="/images/LI-In-Bug.png" // Route of the image file
            height={51.023} // Desired size with correct aspect ratio
            width={60} // Desired size with correct aspect ratio
            alt="Linkedin"/>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
