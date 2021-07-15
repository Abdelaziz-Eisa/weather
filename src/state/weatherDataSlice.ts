import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../constants';

interface Weather {
  city: string;
  country: string;
  status: string;
  description: string;
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
}

type StateType = {
  data: Weather | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: StateType = {
  data: null,
  status: 'idle',
  error: null,
};

const name = 'weatherData';

export const fetchWeatherData = createAsyncThunk(
  `${name}/fetch`,
  async (city: string) => {
    const response = await fetch(`${API_URL}&q=${encodeURIComponent(city)}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return {
      city: data.name,
      country: data.sys.country,
      status: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
    };
  }
);

const weatherDataSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchWeatherData.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message!;
    });
  },
});

export default weatherDataSlice;
