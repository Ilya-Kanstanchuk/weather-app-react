import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Saved from "../components/Saved";
import Sidemenu from "../components/Sidemenu";
import axios from "axios";
import ForecastPanel from "../components/ForecastPanel";
function Home() {
  const [isSearch, setIsSearch] = useState(true);
  const [city, setCity] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  async function findCity() {
    try {
      const responce = await axios.get(`${API_URL}/weather/find`, {
        params: { city },
      });
      console.log(responce.data);
      if (responce.data.success) {
        setWeather(responce.data.forecast);
        setCurrentCity(responce.data.currentCity);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-backgroundtheme">
        <div className="grid grid-cols-[1fr_3fr]">
          <Sidemenu setIsSearch={setIsSearch} isSearch={isSearch} />
          <div className="flex justify-center">
            {isSearch ? (
              <div className="flex flex-col items-center">
                <Search setCity={setCity} city={city} findCity={findCity} />
                <ForecastPanel weather={weather} currentCity={currentCity} />
              </div>
            ) : (
              <Saved />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
