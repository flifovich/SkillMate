import React from 'react';

import styles from './FancyButton.module.css';

interface FancyButtonProps {
  children?: React.ReactNode;
  rotatingBorder?: boolean;
}

export default function FancyButton({
  children,
  rotatingBorder,
}: FancyButtonProps) {
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${
          rotatingBorder ? styles.rotatingGradient : ''
        }`}
      >
        <span className={styles.text}>{children}</span>
      </button>
    </div>
  );
}
