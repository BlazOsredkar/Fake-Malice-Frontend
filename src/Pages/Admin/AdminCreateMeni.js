import {useState} from "react";
import axios from "axios";
import React from "react";
import {backendAPIendpoint} from "../../App";
import "../../style/Admin/adminCreateMeni.css";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AdminSidebar from "./AdminSidebar";
import {Autocomplete, MenuItem, Select, TextField} from "@mui/material";



const AdminCreateMeni = () => {

    const [slike, setSlike] = useState(['/assets/mesni_meni.png']);

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
        <div className="admin-create-meni">
            <div className="admin-create-meni-form">

            <form onSubmit={handleSubmit}>


                <Select labelId="demo-simple-select-label"
                        id="demo-simple-select" name={"vrstaMenija"} value={meni.vrstaMenija} onChange={handleChange} required>
                    <MenuItem value={0}disabled hidden>Izberi Vrsto menija</MenuItem>
                    {vrstaMenija && vrstaMenija.map((vrstaMenija) => (
                        <MenuItem key={vrstaMenija.id} value={vrstaMenija.id}>{vrstaMenija.ime}</MenuItem>
                    ))}
                </Select>
                <TextField id="date" label="Datum" type="date" inputFormat="MM/DD/YYYY" name="datum" InputLabelProps={{
                    shrink: true,
                }} value={meni.datum} onChange={handleChange} required/>
                <TextField id="outlined-basic" className="admin-create-user-form-input" label="Opis" variant="outlined" name="opis" value={meni.opis} onChange={handleChange} />
                <button type="submit" className="submit">Potrdi</button>
            </form>
            </div>
            {uspelo ? <Alert severity="success">Meni uspešno ustvarjen</Alert> : null}
            {neuspeh ? <Alert severity="error">Meni ni bil ustvarjen</Alert> : null}
        </div>
    )
}
export default AdminCreateMeni