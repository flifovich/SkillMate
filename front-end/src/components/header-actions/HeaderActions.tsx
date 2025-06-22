import FancyButton from '../buttons/FancyButton';

import styles from './HeaderActions.module.css';

export default function HeaderActions() {
  return (
    <div className={styles.container}>
      <button className={`${styles.signInCta} desktop-body-3-regular`}>
        Sign In
      </button>
      <FancyButton rotatingBorder>Create Account</FancyButton>
    </div>
  );
}
