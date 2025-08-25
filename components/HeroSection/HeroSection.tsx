import styles from "./HeroSection.module.css";
import { Button } from "../Button/Button";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Joelle ❤️ Alber</h1>
        <p className={styles.date}>September 20, 2025 · Utrecht, Netherlands</p>
        <Button href="">Find Your Seat</Button>
      </div>
    </section>
  );
}
