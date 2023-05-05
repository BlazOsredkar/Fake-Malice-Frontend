import {useEffect, useState} from "react";
import axios from "axios";
import Calendar from "react-calendar";
import KarticaMalica from "./karticaMalica";
import {backendAPIendpoint} from "../App";
import React from 'react';
import {toast} from "react-toastify";


export default function SelectMenu() {
    const [menus, setMenus] = useState(null);
    const [date, setDate] = useState(new Date());
    const [selectedMenu, setSelectedMenu] = useState(null);


    const loadMenuOnDate = async () => {
        setMenus([]);
        try {

            const response = await axios.get(`${backendAPIendpoint}/meni?datum=${date}`, {withCredentials: true});
            if(response.data.length === 0) {
                toast("Na ta datum ni menija!", {type: "error"});
            }
            response.data.sort((a, b) => a.vrstaMenija.id - b.vrstaMenija.id);
            setMenus(response.data);

        }
        catch (e) {}
        handleSelectedMenu();
    }
    useEffect(() => {
        loadMenuOnDate();
    }
    , [date])

    const handleSelectedMenu = () => {
        try {
            axios.post(`${backendAPIendpoint}/meni/order/get`, {datum:date},{withCredentials: true}).then((response) => {
                setSelectedMenu(response.data);
            });

        }catch (e) {}
    }

    return (
        <>
            <div className="kartice">
            <Calendar onChange={setDate} value={date} minDate={new Date()}/>

            {menus && menus.map((menu) => (
                <KarticaMalica key={menu.id} ime={menu.vrstaMenija.ime} opis={menu.opis || menu.vrstaMenija.opis} slika={menu.vrstaMenija.ikona} id={menu.id} reload={loadMenuOnDate} selected={selectedMenu === menu.id} menuDate={menu.datum.toString()}/>
            ))}

            </div>
        </>
    );
}