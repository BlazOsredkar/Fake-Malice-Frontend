import axios from "axios";
import React, {useEffect, useState} from "react";
import {backendAPIendpoint} from "../../App";
import "../../style/Admin/adminCreateUser.css";

import {Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import {InputMask} from "primereact/inputmask";
import {Dropdown} from "primereact/dropdown";
import {Password} from "primereact/password";


const AdminCreateUser = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        ime: '',
        priimek: '',
        eposta: '',
        geslo: '',
        emso: '',
        datumroj: '',
        telefon: '',
        spol: 0,
        kraj: '',
        razred: '',
    });

    const [spoli, setSpoli] = useState([]);
    const [kraji, setKraji] = useState([]);
    const [filteredKraji, setFilteredKraji] = useState([]);
    const [razredi, setRazredi] = useState([]);

    const handleChange = (e,_, data = null) => {
        const { name, value } = data || e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${backendAPIendpoint}/user/register`, user, {withCredentials: true})
            .then(res => {
                toast.success("Uporabnik uspešno ustvarjen");
                navigate('/admin/user/all');

            setUser({
                ime: '',
                priimek: '',
                eposta: '',
                geslo: '',
                emso: '',
                davcna: '',
                datumroj: '',
                telefon: '',
                spol: 0,
                kraj: "",
                razred: "",
                naslov: "",
            })

        })
            .catch(err => {
                console.log(err);
                try {
                    toast.error(err.response.data.message.join(""));
                }catch (e) {
                    toast.error(err.response.data.message);
                }

            })

    };

    const getSpol = (e) => {

        axios.get(`${backendAPIendpoint}/user/spol`, {withCredentials: true})
            .then(res => {
                setSpoli(res.data);
            }
            )
    }

    const getKraji = (e) => {
            axios.get(`${backendAPIendpoint}/cities/all`, {withCredentials: true})
                .then(res => {
                    setKraji(res.data);

                }
                )
    }

    const getRazredi = (e) => {
            axios.get(`${backendAPIendpoint}/classes/all`, {withCredentials: true})
                .then(res => {
                    setRazredi(res.data);
                }
                )
    }

    useEffect(() => {
        getSpol();
        getKraji();
        getRazredi();
    } ,[]);


    return (
        <div className={"admin-create-user"}>
            <div className={"admin-create-user-form"}>
                <FormControl autoComplete="off" >
                    <div className="input-container">
                        <div className="input-container-left">
                            <InputText id="ime" value={user.ime} name="ime" placeholder="Ime" onChange={handleChange} required/>
                            <InputText id="ime" value={user.priimek} name="priimek" placeholder="Priimek" onChange={handleChange} required/>
                            <InputMask id="emso" mask="9999999999999" placeholder="EMŠO" name={"emso"} onChange={handleChange} value={user.emso} required></InputMask>

                            <Dropdown value={user.spol} name={"spol"} onChange={handleChange} options={spoli} optionLabel="ime" placeholder="Spol" className="w-full md:w-14rem" />
                            <Dropdown value={user.kraj} onChange={(e) => handleChange(e, null, {name: "kraj", value: e.value})} options={kraji.map((kraj) => ({ label: kraj.ime.trim() + ", " + kraj.postnaStevilka, value: kraj.ime.trim() + ", " + kraj.postnaStevilka }))}
                                      optionLabel="label" filter filterBy="label" placeholder="Kraj"  />

                            <InputText id="eposta" value={user.eposta} name="eposta" placeholder="E-pošta" type="email" onChange={handleChange} required/>

                        </div>
                        <div className="input-container-right">

                            <Password value={user.geslo} onChange={handleChange} name={"geslo"} placeholder={"Geslo"}
                                      promptLabel="Izberi geslo" weakLabel="Prelahko geslo" mediumLabel="Srednje geslo" strongLabel="Dobro geslo" toggleMask />
                            <Password placeholder={"Ponovi geslo"} name={"ponovi-geslo"} feedback={false} toggleMask/>


                            <InputMask id="telefon" name={"telefon"} value={user.telefon} onChange={handleChange} mask="+(999)99-999-999" placeholder="+(386)99-999-999"></InputMask>

                            <InputText id="naslov" value={user.naslov} name="naslov" placeholder="Naslov" onChange={handleChange} required/>
                            <Dropdown value={user.razred.id} onChange={(e) => handleChange(e, null, {name: "razred", value: {id: e.value}})}
                                      options={razredi.map((razred) => ({ label: razred.ime, value: razred.id }))}
                                      optionLabel="label" placeholder="Razred"/>


                            <Calendar id="date" name={"datumroj"} value={user.datumroj} onChange={handleChange}  showIcon />
                        </div>
                    </div>

                    <Button className="submit-button" type="submit" onClick={handleSubmit}>Potrdi</Button>
                </FormControl>
            </div>
        </div>

    );

}

export default AdminCreateUser