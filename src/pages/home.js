import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../style/calendarcss.css";
import GlavniMeni from "../components/upperMenu";


const Homepage = () => {
  return (
    <div>
        <GlavniMeni/>
        <h1>Homepage</h1>
        <Calendar />
    </div>

    );
}

export default Homepage;