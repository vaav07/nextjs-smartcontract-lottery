import Head from "next/head"
// import Image from "next/image"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
// import ManualHeader from "../components/ManualHeader"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader /> */}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
