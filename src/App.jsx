import { useState } from "react";
import Card from "./components/Card";
import { fetchWeather, fetchWeatherForecast } from "./utils/fetchData";
import WeatherTable from "./components/WeatherTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Nav";
import Lottie from "lottie-react";
import github from "../public/github.json";

const App = () => {
  let [city, setCity] = useState("");
  const [weatherCurrent, setWeatherCurrent] = useState();
  const [weatherLocation, setWeatherLocation] = useState();
  const [forecastData, setForecastData] = useState();
  const [convert, setConvert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetchWeather({ city });
      setWeatherCurrent(res.data.current);
      setWeatherLocation(res.data.location);
      console.log(res);

      const data = await fetchWeatherForecast({ city });
      setForecastData(data.data.forecast.forecastday);
      console.log(forecastData);
    } catch (error) {
      if (error.response.data.error.code === 1006) {
        toast.error(error.response.data.error.message);
      }
      console.error("Error fetching weather data:", error);
    }
  };

  const handleConvert = () => {
    setConvert(!convert);
  };

  return (
    <>
      <div className="">
        <div className="main -z-10">
          <div className="gradient " />
        </div>

        <main className="app">
          <div className="relative">
            <Nav />
            <div className="absolute right-1 top-10 bg-white flex flex-col  border shadow p-2">
              <span className="lg:p-5 sm:p-2 orange_gradient lg:text-2xl sm:lg:sm font-bold">
                Cel {"<->"} Fah
              </span>
              <button
                onClick={handleConvert}
                className=" lg:p-3 p-1 md:p-3 bg-purple-500 text-white rounded-md"
              >
                convert to {convert ? "Fah" : "Cel"}
              </button>
            </div>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
          />{" "}
          <div className="flex  flex-col justify-center items-center gap-5">
            <div className="">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter city name"
                  className="px-4 py-3 lg:w-80 w-64 mr-1 border-zinc-400 border-2 border-solid rounded-md"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-purple-500 text-white rounded-md"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center  overflow-x-auto">
              {weatherLocation && (
                <>
                  <Card
                    weatherLocation={weatherLocation}
                    weatherCurrent={weatherCurrent}
                    convert={convert}
                  />
                </>
              )}
            </div>
            <div className="lg:w-[1200px] w-96 py-5 md:w-[700px] overflow-x-auto">
              {forecastData && (
                <WeatherTable forecastData={forecastData} convert={convert} />
              )}
            </div>
          </div>
          <div className="fixed bottom-0 right-0">
            <a
              href="https://github.com/priyanshugarg1010/weather-task"
              target="blank"
            >
              <Lottie
                animationData={github}
                style={{ height: "100px" }}
                loop={true}
                height={10}
                width={10}
              />
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
