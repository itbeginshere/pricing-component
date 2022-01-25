import Head from "next/head";
import { useState } from "react";
import Card from "../component/Card";
import PopularCard from "../component/PopularCard";
import Title from "../component/Title";
import Toggle from "../component/Toggle";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [annual, setAnnual] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pricing Component</title>
        <meta name="description" content="Pricing Component" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Title />
      <Toggle annual={annual} setAnnual={setAnnual} />
      <div className={styles.container__cardsection}>
        <Card
          title="Basic"
          price={annual ? 199.99 : 19.99}
          features={["500 GB Storage", "2 Users Allowed", "Send up to 3 Gb"]}
        />
        <PopularCard
          title="Professional"
          price={annual ? 124.99 : 24.99}
          features={["1 TB Storage", "5 Users Allowed", "Send up to 10 Gb"]}
        />
        <Card
          title="Basic"
          price={annual ? 399.99 : 39.99}
          features={["2 TB Storage", "10 Users Allowed", "Send up to 20 Gb"]}
        />
      </div>
    </div>
  );
}
