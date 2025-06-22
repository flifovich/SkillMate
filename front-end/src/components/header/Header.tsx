import Link from 'next/link';

import HeaderActions from '../header-actions/HeaderActions';
import LogoText from '../logo/LogoText';
import Navigation from '../navigation/Navigation';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.home}>
          <LogoText className={styles.logo} />
        </Link>
        <Navigation />
        <HeaderActions />
      </div>
    </header>
  );
}
