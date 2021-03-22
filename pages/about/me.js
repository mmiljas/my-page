import styles from './Aboutme.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function me() {
    return (
    <div className={styles.container}>
        <Image className={styles.pics} src="/images/munnaama.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={111.977} // Desired size with correct aspect ratio
        alt="Milja"/>
        <h1>Hi!</h1>
        <p>
            My name is Milja <br></br>
            I'm new to all things web and am keen to learn more<br></br>
            Currently I am a student at <a href="https://www.utu.fi" target="_blank" className={styles.link}>UTU</a>
        </p>
        <p>
            Go {' '}
            <Link href="/" >
            <a className={styles.link}>back</a>
            </Link>
        </p>
        <Head><title>About me</title> </Head>
    </div>
    )
}