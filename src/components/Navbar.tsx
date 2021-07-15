import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#home">Home</a>
      &emsp;
      <a href="#weather">Weather</a>
    </nav>
  );
}
