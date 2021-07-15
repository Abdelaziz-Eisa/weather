import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../state/store';
import { fetchWeatherData } from '../state/weatherDataSlice';
import styles from '../styles/Forecast.module.scss';
import Spinner from './Spinner';

export default function Forecast() {
  const dispatch = useDispatch();
  const { data, error, status } = useSelector(
    (state: AppState) => state.weatherData
  );
  const [input, setCity] = useState('');
  const [inputIsEmpty, setInputIsEmpty] = useState(false);

  useEffect(() => {
    if (input.trim()) {
      setInputIsEmpty(false);
    }
  }, [input]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!input.trim()) {
      setInputIsEmpty(true);
      return;
    }

    dispatch(fetchWeatherData(input));
  }

  return (
    <div className={styles.container}>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            value={input}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className={styles.button}>Find</button>
        </form>

        {inputIsEmpty && (
          <div className={styles.errorText}>Enter a valid city</div>
        )}
      </div>

      <div>
        {status === 'loading' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Spinner />
          </div>
        ) : status === 'succeeded' && data ? (
          <div>
            <div style={{ fontWeight: 'bold' }}>
              {data.city}, {data.country}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${data.icon}.png`}
              alt=""
            />
            <div style={{ marginBottom: '1em' }}>{data.status}</div>
            <div style={{ marginBottom: '0.75em', fontSize: '1.5em' }}>
              {data.temp}°
            </div>
            <div style={{ marginBottom: '1em', fontSize: '1.25em' }}>
              {data.temp_min}° {data.temp_max}°
            </div>
            <div style={{ textTransform: 'capitalize', fontSize: '0.875em' }}>
              {data.description}
            </div>
          </div>
        ) : (
          status === 'failed' && <div className={styles.errorText}>{error}</div>
        )}
      </div>
    </div>
  );
}
