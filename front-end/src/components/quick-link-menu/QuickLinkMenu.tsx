import Link from 'next/link';

import styles from './QuickLinkMenu.module.css';

interface QuickLinkMenuProps {
  title?: string;
  menuLinks: Array<{ label: string; href: string }>;
}

export default function QuickLinkMenu({
  title,
  menuLinks,
}: QuickLinkMenuProps) {
  return (
    <div className={styles.container}>
      {title && (
        <h3 className={`desktop-heading-3 ${styles.title}`}>{title}</h3>
      )}
      <menu className={styles.menu}>
        {menuLinks.map((link) => (
          <li
            key={link.href}
            className={`desktop-body-3-regular ${styles.link}`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </menu>
    </div>
  );
}
