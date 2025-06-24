import Link from 'next/link';
import LogoText from '../logo/LogoText';
import QuickLinkMenu from '../quick-link-menu/QuickLinkMenu';

import styles from './Footer.module.css';

const quickMenuLinks = [
  {
    title: 'Menu',
    links: [
      { label: 'Staff', href: '/staff' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/tos' },
      { label: 'All legal', href: '/all-legal' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoDescription}>
        <Link href="/">
          <LogoText className={styles.logo} />
        </Link>
        <p className={`desktop-body-3-regular ${styles.description}`}>
          Skillmate is a gaming platform that revolutionizes your gaming
          experience with personalized coaching and multiplayer features.
        </p>
      </div>
      <div className={styles.quickLinks}>
        {quickMenuLinks.map((quickMenu) => (
          <QuickLinkMenu
            key={quickMenu.title}
            title={quickMenu.title}
            menuLinks={quickMenu.links}
          />
        ))}
      </div>
    </footer>
  );
}
