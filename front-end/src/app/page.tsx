import styles from './page.module.css';

export default function Home() {
  return (
    <div className={`${styles.container} container`}>
      <h1 className={`${styles.heading} desktop-heading-1`}>
        play with our top mates
      </h1>
    </div>
  );
}
