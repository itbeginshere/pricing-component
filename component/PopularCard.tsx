import { Fragment } from "react";
import styles from "../styles/PopularCard.module.scss";

export default function PopularCard({
  title,
  price,
  features = [],
}: {
  title: string;
  price: number;
  features: string[];
}) {
  return (
    <div className={styles.card}>
      <h1 className={styles.card__title}>{title}</h1>
      <h2 className={styles.card__price}>${price}</h2>
      <div className={styles.card__featuresection}>
        <div className={styles.card__featuresection__line}></div>
        {features.map((feature, index) => (
          <Fragment key={index}>
            <h3 className={styles.card__featuresection__text}>{feature}</h3>
            <div className={styles.card__featuresection__line}></div>
          </Fragment>
        ))}
      </div>
      <button className={styles.card__learnmore}>LEARN MORE</button>
    </div>
  );
}
