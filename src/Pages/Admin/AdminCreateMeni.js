import {useState} from "react";
import axios from "axios";
import React from "react";



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
        axios.post('http://localhost:5050/api/createMeni', meni, {withCredentials: true})
            .then(res => {
                    console.log(res);
                    console.log(res.data);
                }
            )

    };

    const getVrsteMenija = () => {
        axios.get('http://localhost:5050/api/vrsteMenijev', {withCredentials: true})
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Datum</label>
                <input type="date" name="datum" value={meni.datum} onChange={handleChange} required/>
                <label>Vrsta menija</label>
                <select name="vrstaMenija" value={meni.vrstaMenija} onChange={handleChange} required>
                    <option value="" disabled selected hidden>Izberi vrsto menija</option>
                    {vrstaMenija && vrstaMenija.map((vrstaMenija) => (
                        <option value={vrstaMenija.id}>{vrstaMenija.ime}</option>
                    ))}
                </select>
                <label>Opis</label>
                <input type="text" name="opis" value={meni.opis} onChange={handleChange} required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AdminCreateMeni