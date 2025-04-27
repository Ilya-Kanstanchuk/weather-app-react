import React from "react";
import { useAuth } from "../context/ContextProvider";
function Home() {
  const { user } = useAuth();
  return <div className="text-7xl">{user ? user.name : "Loading..."}</div>;
}

export default Home;
