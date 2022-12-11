import {useEffect, useState} from "react";
import axios from "axios";
import Calendar from "react-calendar";
import KarticaMalica from "./karticaMalica";


export default function SelectMenu() {
    const [menus, setMenus] = useState([]);
    const [date, setDate] = useState(new Date());


    const loadMenuOnDate = async () => {
        setMenus([]);
        try {

            const response = await axios.get(`http://localhost:5050/api/meni?datum=${date}`, {withCredentials: true});
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
            <Calendar onChange={setDate} value={date} />
            {menus.map((menu) => (
                <KarticaMalica key={menu.id} ime={menu.vrstaMenija.ime} opis={menu.opis} slika={menu.vrstaMenija.ikona} />
            ))}
        </>
    );
}