import {useState} from "react";
import axios from "axios";
import React from "react";
import {backendAPIendpoint} from "../../App";
import "../../style/Admin/adminCreateMeni.css";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AdminSidebar from "./AdminSidebar";
import {Autocomplete, Button, MenuItem, Select, TextField} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import {Dropdown} from "primereact/dropdown";
import {Calendar} from "primereact/calendar";
import {InputText} from "primereact/inputtext";





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

    const handleChange = (e, data) => {
        const { name, value } = data || e.target;
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
                toast.success('Meni uspešno ustvarjen!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                }
            )
            .catch(err => {
                setNeuspeh(true);
                toast.error('Meni ni bil ustvarjen!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
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

    const notify = () => toast("Wow so easy!");



    return (
        <div className="admin-create-meni">
            <div className="admin-create-meni-form">

            <form onSubmit={handleSubmit}>
                <Dropdown value={meni.vrstaMenija} onChange={(e) => handleChange(e, null, {name: "vrstaMenija", value: e.value})}
                          options={vrstaMenija ? vrstaMenija.map((vm) => ({ label: vm.ime, value: vm.id })) : []}
                          optionLabel="label" placeholder="Izberi Vrsto menija" />
                <Calendar className={"admin-create-user-meni-input"}  id="date" name={"datum"} value={meni.datum} onChange={handleChange}  showIcon />
                <InputText id="naslov" className={"admin-create-meni-form-input"} value={meni.opis} name="Opis" placeholder="Opis" onChange={handleChange} required/>
                <Button className="submit-button" type="submit" className="submit">Potrdi</Button>
            </form>
            </div>
        </div>
    )
}
export default AdminCreateMeni