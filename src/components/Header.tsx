import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Weather</div>
      <div className={styles.circleR}>R</div>
      <div>the whole world comes to you</div>
    </header>
  );
}
