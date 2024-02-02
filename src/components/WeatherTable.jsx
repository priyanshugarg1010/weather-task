import { convertDateFormat } from "../utils/date";

/* eslint-disable react/prop-types */
export const WeatherTable = ({ forecastData, convert }) => {
  return (
    <div className="lg:w-[1200px]  md:w-[700px]">
      <table className="w-full text-lg  text-center text-gray-700">
        <thead className="text-xs uppercase bg-gray-50 divide-y divide-gray-500">
          <tr>
            <th
              scope="col"
              className="lg:px-12 lg:py-5 md:px-8 md:py-4 px-5 py-3"
            >
              Date
            </th>
            <th
              scope="col"
              className="lg:px-12 lg:py-5 md:px-8 md:py-4 px-5 py-3"
            >
              Weather icon
            </th>
            <th
              scope="col"
              className="lg:px-12 lg:py-5 md:px-8 md:py-4 px-5 py-3"
            >
              weather
            </th>
            <th
              scope="col"
              className="lg:px-12 lg:py-5 md:px-8 md:py-4 px-5 py-3"
            >
              avg temperature
            </th>
            <th
              scope="col"
              className="lg:px-12 lg:py-5 md:px-8 md:py-4 px-5 py-3"
            >
              low/high
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-500">
          {forecastData.map((data, index) => (
            <>
              <tr className="bg-white " key={index}>
                <td className="lg:px-12 lg:py-4 md:px-8 md:py-3 px-5 py-3">
                  {convertDateFormat(data.date)}
                </td>
                <td className="lg:px-12 lg:py-4 md:px-8 md:py-3 px-5 py-3 flex justify-center">
                  <img src={data.day.condition.icon} alt="weather icon" />
                </td>
                <td className="lg:px-12 lg:py-4 md:px-8 md:py-3 px-5 py-3">
                  {data.day.condition.text}
                </td>
                <td className="lg:px-12 lg:py-4 md:px-8 md:py-3 px-5 py-3">
                  {convert ? data.day.avgtemp_c : data.day.avgtemp_f}
                </td>
                <td className="lg:px-12 lg:py-4 md:px-8 md:py-3 px-5 py-3">
                  {convert ? data.day.maxtemp_c : data.day.maxtemp_f}

                  <span className="orange_gradient text-3xl">/</span>
                  {convert ? data.day.mintemp_c : data.day.mintemp_f}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
