import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../style/calendarcss.css";
import GlavniMeni from "../components/upperMenu";
import KarticaMalica from "../components/karticaMalica";


const Homepage = () => {
  return (
    <div>
        <GlavniMeni/>
        <h1>Homepage</h1>
        <Calendar />
        <KarticaMalica/>
    </div>

    );
}

export default Homepage;