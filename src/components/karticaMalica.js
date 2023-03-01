import React from "react";
import "../style/karticaMalice.css";
import {useSelector} from "react-redux";
import {selectUser} from "../auth/userSlice";
import axios from "axios";
import {backendAPIendpoint} from "../App";

const KarticaMalica = ({ime, opis, slika, id, reload, selected}) => {

  const user = useSelector(selectUser);

  const handleDeleteMeni = async () => {

    const potrditev = window.confirm("Ali ste prepričani, da želite izbrisati meni?");

    if (potrditev) {
        try {
          await axios.delete(`${backendAPIendpoint}/meni/delete/`, {withCredentials: true, data: {id: id}});
            reload();
        }
        catch (e) {}
    }
  }

  const handleNaroci = async () => {
    try {
      await axios.post(`${backendAPIendpoint}/meni/order/`, {meni:id},{withCredentials: true});
        reload();
    }
    catch (e) {}
  }




  return (
    <>
      <div className="karticaMalic">
        <div className="karticaMalica__gumb">
          {user.isadmin || selected ? selected && <button style={{backgroundColor: "green"}}>Naročeno</button> : <button onClick={handleNaroci}>Naroči</button>}
          {user.isadmin ?  <button onClick={handleDeleteMeni}>Izbriši</button> : <> </>}
          {user.isadmin ?  <button>Uredi</button> : <> </>}
        </div>
        <div className="karticaMalica__slika">
          <img src={slika} alt="slika malice" height={150} />
        </div>

        <div className="karticaMalica__opis">
          <h3>{ime}</h3>
          <p1>{opis}</p1>
        </div>
      </div>
    </>
  );
};

export default KarticaMalica;
