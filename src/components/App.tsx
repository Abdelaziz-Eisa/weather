import { Provider } from 'react-redux';
import HomeSection from './HomeSection';
import WeatherSection from './WeatherSection';
import store from '../state/store';
import styles from '../styles/App.module.scss';
import Navbar from './Navbar';

export default function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <HomeSection />
      <Provider store={store}>
        <WeatherSection />
      </Provider>
    </div>
  );
}
