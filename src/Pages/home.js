import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../style/calendarcss.css";
import "../style/homepage.css";
import GlavniMeni from "../components/upperMenu";
import KarticaMalica from "../components/karticaMalica";


const Homepage = () => {
  return (
    <>
      <GlavniMeni />
      <div className="main">
        <Calendar />
        <KarticaMalica />
      </div>
    </>
  );
}

export default Homepage;