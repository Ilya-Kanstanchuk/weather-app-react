import React from "react";

function ForecastPanel({
  weather,
  currentCity,
  addToSaved,
  isSaved,
  deleteFromSaved,
}) {
  console.log(weather);
  function getWeatherDescription(code) {
    const weatherCodes = {
      0: ["Clear sky", "/sunny(1).png"],
      1: ["Mainly clear", "/sunny_s_cloudy.png"],
      2: ["Partly cloudy", "/cloudy_s_sunny.png"],
      3: ["Overcast", "/cloudy.png"],
      45: ["Fog", "/fog.png"],
      48: ["Depositing rime fog", "/fog.png"],
      51: ["Light drizzle", "/rain_light.png"],
      53: ["Moderate drizzle", "/rain_light.png"],
      55: ["Dense drizzle", "/rain_light.png"],
      56: ["Light freezing drizzle", "/rain_light.png"],
      57: ["Dense freezing drizzle", "/rain_light.png"],
      61: ["Slight rain", "/rain.png"],
      63: ["Moderate rain", "/rain.png"],
      65: ["Heavy rain", "/rain_heavy.png"],
      66: ["Light freezing rain", "/rain_light.png"],
      67: ["Heavy freezing rain", "/rain_heavy.png"],
      71: ["Slight snow fall", "/snow_light.png"],
      73: ["Moderate snow fall", "/snow.png"],
      75: ["Heavy snow fall", "/snow_heavy.png"],
      77: ["Snow grains", "/snow_heavy.png"],
      80: ["Slight rain showers", "/rain.png"],
      81: ["Moderate rain showers", "/rain.png"],
      82: ["Violent rain showers", "/rain_heavy.png"],
      85: ["Slight snow showers", "/snow.png"],
      86: ["Heavy snow showers", "/snow_heavy.png"],
      95: ["Thunderstorm", "/thunderstorms.png"],
      96: ["Thunderstorm with slight hail", "/thunderstorms.png"],
      99: ["Thunderstorm with heavy hail", "/thunderstorms.png"],
    };

    return weatherCodes[code] || "Unknown";
  }
  return (
    <div>
      {weather ? (
        <div className="mt-16">
          <p className="text-3xl font-extralight text-center">{currentCity}</p>
          <div>
            <div className="flex flex-col items-center justify-center py-3 px-15 bg-white rounded-2xl">
              <p className="text-xl font-light mb-5">Today</p>
              <div className="flex justify-center items-center gap-10 mb-8">
                <div className="text-3xl font-light">
                  {`${weather.temperature_2m_max[0] > 0 ? "+" : ""}${Math.round(
                    weather.temperature_2m_max[0]
                  )}°C, ${getWeatherDescription(weather.weathercode[0])[0]}`}
                </div>
                <div className="w-20 h-20">
                  <img
                    src={`${getWeatherDescription(weather.weathercode[0])[1]}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5 mt-5">
              <div className="flex flex-col items-center justify-center py-3 px-5 bg-white rounded-2xl">
                <p className="font-light mb-2">{weather.time[1]}</p>
                <div className="flex justify-center items-center gap-3 mb-2">
                  <div className="font-light">
                    <div>{`${
                      weather.temperature_2m_max[1] > 0 ? "+" : ""
                    }${Math.round(weather.temperature_2m_max[1])}°C,`}</div>
                    <div>{`${
                      getWeatherDescription(weather.weathercode[1])[0]
                    }`}</div>
                  </div>
                  <div className="w-10 h-10">
                    <img
                      src={`${
                        getWeatherDescription(weather.weathercode[1])[1]
                      }`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-3 px-5 bg-white rounded-2xl">
                <p className="font-light mb-2">{weather.time[2]}</p>
                <div className="flex justify-center items-center gap-3 mb-2">
                  <div className="font-light">
                    <div>{`${
                      weather.temperature_2m_max[2] > 0 ? "+" : ""
                    }${Math.round(weather.temperature_2m_max[2])}°C,`}</div>
                    <div>{`${
                      getWeatherDescription(weather.weathercode[2])[0]
                    }`}</div>
                  </div>
                  <div className="w-10 h-10">
                    <img
                      src={`${
                        getWeatherDescription(weather.weathercode[2])[1]
                      }`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-3 px-5 bg-white rounded-2xl">
                <p className="font-light mb-2">{weather.time[3]}</p>
                <div className="flex justify-center items-center gap-3 mb-2">
                  <div className="font-light">
                    <div>{`${
                      weather.temperature_2m_max[3] > 0 ? "+" : ""
                    }${Math.round(weather.temperature_2m_max[3])}°C,`}</div>
                    <div>{`${
                      getWeatherDescription(weather.weathercode[3])[0]
                    }`}</div>
                  </div>
                  <div className="w-10 h-10">
                    <img
                      src={`${
                        getWeatherDescription(weather.weathercode[3])[1]
                      }`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            {isSaved ? (
              <button
                onClick={() => deleteFromSaved()}
                className="px-8 py-2 bg-removeloc rounded-2xl cursor-pointer"
              >
                Remove location
              </button>
            ) : (
              <button
                onClick={() => addToSaved()}
                className="px-8 py-2 bg-searchb rounded-2xl cursor-pointer"
              >
                Save location
              </button>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ForecastPanel;
