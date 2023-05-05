import React, {useEffect} from "react";
import "../style/karticaMalice.css";
import {useSelector} from "react-redux";
import {selectUser} from "../auth/userSlice";
import axios from "axios";
import {backendAPIendpoint} from "../App";
import {toast} from "react-toastify";

const KarticaMalica = ({ime, opis, slika, id, reload, selected, menuDate}) => {

  const user = useSelector(selectUser)
  const [nowDate, setDateNow] = React.useState(new Date());
  const [date, setDate] = React.useState(new Date());

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
      await axios.post(`${backendAPIendpoint}/meni/order/`, {meni:id, datum:menuDate},{withCredentials: true});
      toast("Meni naročen!", {type: "success"})
        reload();
    }
    catch (e) {
        toast("Meni ni bil naročen!", {type: "error"})
    }
  }

  useEffect(() => {
    const dateNow = new Date()
    dateNow.setHours(0,0,0,0);
    setDateNow(dateNow);
    const dateMenu = new Date(menuDate)
    dateMenu.setHours(0,0,0,0);
    setDate(dateMenu);
  }, [menuDate])



  return (
    <>
      <div className="karticaMalic">
        <div className="karticaMalica__gumb">
          {selected && !user.isadmin ? <button style={{backgroundColor: "green", cursor: "not-allowed"}} >Naročeno</button> : nowDate.getTime() !== date.getTime() && !user.isadmin ? <button onClick={handleNaroci}>Naroči</button> : null }
          {user.isadmin ?  <button onClick={handleDeleteMeni}>Izbriši</button> : <> </>}
          {user.isadmin ?  <button>Uredi</button> : <> </>}
        </div>
        <div className="karticaMalica__slika">
          <img src={slika} alt="slika malice" height={150} />
        </div>

        <div className="karticaMalica__opis">
          <h3>{ime}</h3>
          <p>{opis}</p>
        </div>
      </div>
    </>
  );
};

export default KarticaMalica;
