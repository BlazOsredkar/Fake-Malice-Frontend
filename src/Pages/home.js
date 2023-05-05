import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../style/calendarcss.css";
import "../style/homepage.css";
import GlavniMeni from "../components/upperMenu";
import KarticaMalica from "../components/karticaMalica";
import SelectMenu from "../components/selectMenu";
import StanjeRac from "../components/stanjeRac";
import {CookieConsent} from "react-cookie-consent";
import slika from "../assets/cookie.png";


const Homepage = () => {
  return (
    <>
      <GlavniMeni />
      <div className="main">
        <SelectMenu />
          <CookieConsent location={"bottom"} buttonText={"Sprejmi"} cookieName={"cookieConsent"} style={{ background: "#2B373B" }} buttonStyle={{background:"rgb(22, 87, 198)", color: "#ffffff", fontSize: "13px" }} expires={150}><img src={slika} alt="slika cookie" height={25} /> Spletna stran uporablja piškotke za delovanje.</CookieConsent>
      </div>
    </>
  );
}

export default Homepage;