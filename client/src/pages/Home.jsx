import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Saved from "../components/Saved";
import Sidemenu from "../components/Sidemenu";
function Home() {
  const [isSearch, setIsSearch] = useState(true);
  const [city, setCity] = useState("");

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-backgroundtheme">
        <div className="grid grid-cols-[1fr_3fr]">
          <Sidemenu setIsSearch={setIsSearch} isSearch={isSearch} />
          <div className="flex justify-center">
            {isSearch ? <Search setCity={setCity} city={city} /> : <Saved />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
