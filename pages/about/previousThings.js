import Head from 'next/head'
import Link from 'next/link'
import styles from './PreviousThings.module.css' 


export default function PreviousThings() {
    return (
    <div className={styles.container}>
        <h1>Things I have done previously</h1>
        <p>
            Have a look at my previous projects!
            <ul>
                <li><a href="https://quiz-json.herokuapp.com" className={styles.link}>Quiz-app</a></li>
                <li><a href="https://telephone-ex.herokuapp.com/" className={styles.link}>Fullstack course</a></li>
            </ul>
        </p>
        <p>
            I also have a GitHub account!
        </p>
        <a href="https://www.github.com/mmiljas" target="_blank">
          <Image src="/images/GitHub-Mark-Light-64px.png" // Route of the image file
            height={60} // Desired size with correct aspect ratio
            width={60} // Desired size with correct aspect ratio
            alt="Linkedin"/>
          </a>
        <p>
            Go {' '}<Link href="/">
                <a className={styles.link}>back</a>
            </Link>
        </p>
        <Head><title>Previous Projects</title></Head>
    </div>
    )
}