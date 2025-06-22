import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <menu className={styles.menu}>
        <li>
          <Link
            href="/mates"
            className={`desktop-body-3-regular ${styles.link}`}
          >
            Mates
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`desktop-body-3-regular ${styles.link}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`desktop-body-3-regular ${styles.link}`}
          >
            Contact
          </Link>
        </li>
      </menu>
    </nav>
  );
}
