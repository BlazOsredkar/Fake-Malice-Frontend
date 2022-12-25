import {useState} from "react";
import axios from "axios";
import React from "react";
import "../../style/createMeni.css";
import {backendAPIendpoint} from "../../App";



const AdminCreateMeni = () => {

    const [vrstaMenija, setVrstaMenija] = useState("");

    const [meni, setMeni] = useState({
        datum: "",
        vrstaMenija: "",
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
        axios.post(`${backendAPIendpoint}/createMeni`, meni, {withCredentials: true})
            .then(res => {
                    console.log(res);
                    console.log(res.data);
                }
            )

    };

    const getVrsteMenija = () => {
        axios.get(`${backendAPIendpoint}/vrsteMenijev`, {withCredentials: true})
            .then(res => {
                    console.log(res);
                    console.log(res.data);
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
                    <option value="" disabled selected hidden>Izberi vrsto menija</option>
                    {vrstaMenija && vrstaMenija.map((vrstaMenija) => (
                        <option value={vrstaMenija.id}>{vrstaMenija.ime}</option>
                    ))}
                </select>
                <br/>
                <label>Opis</label>
                <br/>
                <input type="text" name="opis" value={meni.opis} onChange={handleChange} required/>
                <br/>
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    )
}
export default AdminCreateMeni