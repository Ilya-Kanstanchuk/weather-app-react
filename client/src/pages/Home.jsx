import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Sidemenu from "../components/Sidemenu";
import axios from "axios";
import ForecastPanel from "../components/ForecastPanel";
import { useAuth } from "../context/ContextProvider";
function Home() {
  const [isSearch, setIsSearch] = useState(true);
  const [city, setCity] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  const { user } = useAuth();
  const [isSaved, setIsSaved] = useState(false);
  const [savedCities, setSavedCities] = useState([]);
  const [savedWeather, setSavedWeather] = useState([]);

  async function findCity() {
    try {
      const responce = await axios.get(`${API_URL}/weather/find`, {
        params: { city },
      });
      console.log(responce.data);
      if (responce.data.success) {
        setWeather(responce.data.forecast);
        setCurrentCity(responce.data.currentCity);
        setIsSaved(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addToSaved() {
    try {
      const responce = await axios.post(`${API_URL}/city/add`, {
        currentCity,
        user,
      });
      console.log(responce.data);
      if (responce.data.success) {
        setIsSaved(true);
        fetchSavedCities();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteFromSaved(currentCity) {
    const userId = user.id;
    try {
      const responce = await axios.delete(`${API_URL}/city/delete`, {
        params: { currentCity, userId },
      });
      console.log(responce.data);
      if (responce.data.success) {
        setIsSaved(false);
        fetchSavedCities();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function checkIfSaved() {
    const userId = user.id;
    try {
      const responce = await axios.get(`${API_URL}/city/check`, {
        params: { currentCity, userId },
      });
      console.log(responce.data);
      if (responce.data.success) {
        setIsSaved(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchSavedCities() {
    const userId = user.id;
    try {
      const responce = await axios.get(`${API_URL}/city/all`, {
        params: { userId },
      });
      if (responce.data.success) {
        setSavedCities(responce.data.cities);
      }
      console.log(responce.data.cities);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchWeather() {
    try {
      const weatherData = await Promise.all(
        savedCities.map(async (obj) => {
          const city = obj.city;
          const responce = await axios.get(`${API_URL}/weather/find`, {
            params: { city },
          });
          if (responce.data.success) {
            return { city: city, data: responce.data.forecast };
          }
          return null;
        })
      );
      const filteredData = weatherData.filter((w) => w !== null);
      setSavedWeather(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (currentCity) {
      checkIfSaved();
    }
  }, [currentCity]);

  useEffect(() => {
    fetchSavedCities();
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [savedCities]);

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
                <ForecastPanel
                  weather={weather}
                  currentCity={currentCity}
                  addToSaved={addToSaved}
                  isSaved={isSaved}
                  deleteFromSaved={deleteFromSaved}
                />
              </div>
            ) : (
              <div className="mt-7 mb-10">
                <h2 className="block text-center text-5xl font-extralight mb-3">
                  Saved locations
                </h2>
                {savedWeather.map((panel) => (
                  <ForecastPanel
                    key={panel.city}
                    weather={panel.data}
                    currentCity={panel.city}
                    addToSaved={addToSaved}
                    isSaved={true}
                    deleteFromSaved={deleteFromSaved}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
