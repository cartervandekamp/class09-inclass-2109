import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ad from "../components/Ad";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        Welcome to the Homepage
        <Ad />
      </main>
    </div>
  );
}
