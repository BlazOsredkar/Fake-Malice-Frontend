import {useEffect, useState} from "react";
import axios from "axios";

export default function StanjeRac() {

    const [stanje, setStanje] = useState([]);


    const loadStanje = async () => {
        setStanje([]);
        try {
            const response = await axios.get(`http://localhost:5050/api/user`, {withCredentials: true});
            setStanje(response.data.stanjerac);
        }
        catch (e) {}
    }

    useEffect(() => {
        loadStanje();
    }
    , [])

    return (
        <>
            <div className="stanje">
                <p1>Stanje računa</p1>
                <h2>{stanje} €</h2>
            </div>
        </>
    );





}