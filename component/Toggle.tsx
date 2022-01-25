import styles from "../styles/Toggle.module.scss";

export default function Toggle({
  annual,
  setAnnual,
}: {
  annual: boolean;
  setAnnual: any;
}) {
  return (
    <div className={styles.toggle}>
      <div
        className={`${
          annual ? styles.toggle__text_highlight : styles.toggle__text
        }`}
      >
        Annually
      </div>
      <div className={styles.toggle__switch} onClick={() => setAnnual(!annual)}>
        <div
          className={`${styles.ball} ${
            annual ? styles.ball_left : styles.ball_right
          }`}
        ></div>
        <span className={`${styles.slider} ${styles.slider_round}`}></span>
      </div>
      <div
        className={`${
          !annual ? styles.toggle__text_highlight : styles.toggle__text
        }`}
      >
        Monthly
      </div>
    </div>
  );
}
