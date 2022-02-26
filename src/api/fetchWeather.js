import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "cd0b2f5a77170f050b81661e7771f70d";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    param: {
      q: query,
      units: "metric",
      APPId: API_KEY
    }
  });

  return data;
};
