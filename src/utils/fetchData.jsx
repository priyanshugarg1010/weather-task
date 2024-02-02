import axios from "axios";

export const fetchWeather = async ({ city }) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${city}`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchWeatherForecast = async ({ city }) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${city}&days=3`
    );
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
