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
            </ul>
        </p>
        <p>
            Go {' '}<Link href="/">
                <a className={styles.link}>back</a>
            </Link>
        </p>
        <Head><title>Previous Projects</title></Head>
    </div>
    )
}