import axios from "axios";
import React, {useEffect, useState} from "react";
import {backendAPIendpoint} from "../../App";
import { makeStyles } from "@material-ui/core/styles";
import "../../style/Admin/adminCreateUser.css";
import {useNavigate, useParams} from "react-router-dom";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {InputMask} from "primereact/inputmask";
import {Calendar} from "primereact/calendar";
import {Button, FormControl} from "@mui/material";


const AdminEditUser = () => {

    const [user, setUser] = useState({
        ime: '',
        priimek: '',
        eposta: '',
        geslo: '',
        emso: '',
        davcna: '',
        datumroj: '',
        telefon: '',
        spol: 0,
        kraj: '',
        razred: "",
        naslov: "",
    });

    const [spoli, setSpoli] = useState([]);
    const [kraji, setKraji] = useState([]);
    const [razredi, setRazredi] = useState([]);

    const id = useParams().id;

    const handleChange = (e,_, data = null) => {
        const { name, value } = data || e.target;
        setUser({ ...user, [name]: value });
    };

    const loadUser = () => {
        axios.get(`${backendAPIendpoint}/user/find/${id}`, {withCredentials: true})
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
            })
    }


    const navigate = useNavigate();

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

    const handleSubmit = (e) => {
        e.preventDefault();


        axios.put(`${backendAPIendpoint}/user/update/${id}`, user, {withCredentials: true})
            .then(res => {
                alert("Uporabnik uspešno urejen!")
                navigate("/admin/user/all");

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
                alert(err.response.data.message);
            })
    };

    useEffect(() => {
        loadUser();
        getSpol();
        getKraji();
        getRazredi();
    },[id]);

    


    return (
        <div className={"admin-create-user"}>
            <div className={"admin-create-user-form"}>
                <FormControl autoComplete="off" >
                    <div className="input-container">
                        <div className="input-container-left">
                            <InputText id="ime" value={user.ime} name="ime" placeholder="Ime" onChange={handleChange} required />
                            <InputText id="priimek" value={user.priimek} name="priimek" placeholder="Priimek" onChange={handleChange} required />
                            <InputMask id="emso" mask="9999999999999" placeholder="EMŠO" name="emso" onChange={handleChange} value={user.emso} required />

                            <Dropdown value={user.spol} name="spol" onChange={handleChange} options={spoli} optionLabel="ime" placeholder="Spol" className="w-full md:w-14rem" />
                            <Dropdown
                                value={user.kraj?.id}
                                name={"kraj"}
                                onChange={(e) => handleChange(e, null, {name: "kraj", value: e.value})}
                                options={kraji.map((kraj) => ({
                                    label: kraj.ime.trim() + ", " + kraj.postnaStevilka,
                                    value: kraj.id
                                }))}
                                optionLabel="label"
                                filter
                                filterBy="label"
                                placeholder="Kraj"
                            />

                            <InputText id="eposta" value={user.eposta} name="eposta" placeholder="E-pošta" type="email" onChange={handleChange} required />
                        </div>

                        <div className="input-container-right">
                            <InputText id="geslo" value={user.geslo} name="geslo" placeholder="Geslo" type="password" onChange={handleChange} required />
                            <InputText id="ponovi-geslo" name="ponoviGeslo" placeholder="Ponovi Geslo" type="password" required />
                            <InputText id="telefon" value={user.telefon} name="telefon" placeholder="Telefon" onChange={handleChange} required />
                            <InputText id="naslov" value={user.naslov} name="naslov" placeholder="Naslov" onChange={handleChange} required />

                            <Dropdown value={user.razred?.id} name="razred" onChange={handleChange} options={razredi.map(razred => ({label: razred.ime, value: razred.id}))} placeholder="Razred" className="w-full md:w-14rem" />

                            <Calendar id="datumroj" name="datumroj" value={user.datumroj} onChange={handleChange}  showIcon />
                        </div>
            </div>

                    <Button className="submit-button" type="submit" onClick={handleSubmit}>Potrdi</Button>
                </FormControl>
            </div>
        </div>

    );

}

export default AdminEditUser;