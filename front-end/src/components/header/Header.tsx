import Logo from '../logo/Logo';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <div className={styles.da}></div>
        <div className={styles.da}></div>
      </div>
    </header>
  );
}
