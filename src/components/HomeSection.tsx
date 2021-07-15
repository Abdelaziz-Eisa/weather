import styles from '../styles/HomeSection.module.scss';
import Header from './Header';

export default function HomeSection() {
  return (
    <section id="home" className={styles.section}>
      <Header />
      <div className={styles.greetingText}>
        <div>
          Hello<span style={{ color: 'orangered' }}>.</span>
        </div>
        <div>Weather</div>
        <div>News.</div>
      </div>
    </section>
  );
}
