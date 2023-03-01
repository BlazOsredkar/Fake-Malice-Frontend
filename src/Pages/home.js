import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../style/calendarcss.css";
import "../style/homepage.css";
import GlavniMeni from "../components/upperMenu";
import KarticaMalica from "../components/karticaMalica";
import SelectMenu from "../components/selectMenu";
import StanjeRac from "../components/stanjeRac";


const Homepage = () => {
  return (
    <>
      <GlavniMeni />
      <div className="main">
        <SelectMenu />
      </div>
    </>
  );
}

export default Homepage;