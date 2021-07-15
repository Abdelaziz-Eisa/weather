import Forecast from './Forecast';
import styles from '../styles/WeatherSection.module.scss';

export default function WeatherSection() {
  return (
    <section id="weather" className={styles.section}>
      <div style={{ marginBottom: '1em', fontWeight: 'bold' }}>
        Just Type The City's Name
      </div>
      <div style={{ color: '#888', fontSize: '0.875em', marginBottom: '1em' }}>
        You Must Spell Correctly
      </div>
      <Forecast />
    </section>
  );
}
