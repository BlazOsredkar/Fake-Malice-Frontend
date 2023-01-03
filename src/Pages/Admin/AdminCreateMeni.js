import {useState} from "react";
import axios from "axios";
import React from "react";
import "../../style/createMeni.css";
import {backendAPIendpoint} from "../../App";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AdminSidebar from "./AdminSidebar";



const AdminCreateMeni = () => {

    const [vrstaMenija, setVrstaMenija] = useState("");
    const [uspelo, setUspelo] = useState(false);
    const [neuspeh, setNeuspeh] = useState(false);

    const [meni, setMeni] = useState({
        datum: "",
        vrstaMenija: 0,
        opis: "",
    }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeni({ ...meni, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(meni);
        axios.post(`${backendAPIendpoint}/meni/create`, meni, {withCredentials: true})
            .then(res => {

                    setMeni({
                        datum: "",
                        vrstaMenija: "",
                        opis: "",
                    }


                    )
                setUspelo(true);
                }
            )
            .catch(err => {
                setNeuspeh(true);
            }
            )

    };

    const getVrsteMenija = () => {
        axios.get(`${backendAPIendpoint}/meni/vrste`, {withCredentials: true})
            .then(res => {
                    res.data.sort((a, b) => a.id - b.id);
                    setVrstaMenija(res.data);
                }
            )
    }



    React.useEffect(() => {
        getVrsteMenija();
    }
    , []);




    return (
        <div className="createMenu">
            <form onSubmit={handleSubmit}>
                <label>Datum</label>
                <br/>
                <input type="date" name="datum" value={meni.datum} onChange={handleChange} required/>
                <br/>
                <label>Vrsta menija</label>
                <br/>
                <select name="vrstaMenija" value={meni.vrstaMenija} onChange={handleChange} required>
                    <option value={0}disabled hidden>Izberi vrsto menija</option>
                    {vrstaMenija && vrstaMenija.map((vrstaMenija) => (
                        <option key={vrstaMenija.id} value={vrstaMenija.id}>{vrstaMenija.ime}</option>
                    ))}
                </select>
                <br/>
                <label>Opis</label>
                <br/>
                <input type="text" name="opis" value={meni.opis} onChange={handleChange}/>
                <br/>
                <button type="submit" className="submit">Submit</button>

            </form>
            {uspelo ? <Alert severity="success">Meni uspešno ustvarjen</Alert> : null}
            {neuspeh ? <Alert severity="error">Meni ni bil ustvarjen</Alert> : null}
        </div>
    )
}
export default AdminCreateMeni