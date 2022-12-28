import {useEffect, useState} from "react";
import axios from "axios";
import Calendar from "react-calendar";
import KarticaMalica from "./karticaMalica";
import {backendAPIendpoint} from "../App";


export default function SelectMenu() {
    const [menus, setMenus] = useState(null);
    const [date, setDate] = useState(new Date());


    const loadMenuOnDate = async () => {
        setMenus([]);
        try {

            const response = await axios.get(`${backendAPIendpoint}/meni?datum=${date}`, {withCredentials: true});
            response.data.sort((a, b) => a.vrstaMenija.id - b.vrstaMenija.id);
            setMenus(response.data);

        }
        catch (e) {}
    }
    useEffect(() => {
        loadMenuOnDate();
    }
    , [date])

    return (
        <>
            <Calendar onChange={setDate} value={date} minDate={new Date()}/>
            <div className="kartice">
            {menus && menus.map((menu) => (
                <KarticaMalica key={menu.id} ime={menu.vrstaMenija.ime} opis={menu.opis || menu.vrstaMenija.opis} slika={menu.vrstaMenija.ikona} id={menu.id} reload={loadMenuOnDate}/>
            ))}

            </div>
        </>
    );
}