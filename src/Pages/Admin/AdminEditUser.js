import axios from "axios";
import React, {useEffect, useState} from "react";
import {backendAPIendpoint} from "../../App";

import "../../style/Admin/adminCreateUser.css";
import {useNavigate, useParams} from "react-router-dom";
import {Autocomplete, Button, FormControl, MenuItem, Select, TextField} from "@mui/material";


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
        spol: '',
        kraj: '',
        razred: '',
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
                console.log(err);
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
                console.log(res);
                console.log(res.data);
                alert("Uporabnik uspešno urejen!")
                navigate("/admin/allUsers");

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
                    kraj: '',
                    razred: '',
                })

            })
            .catch(err => {
                console.log(err);
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
                            <TextField id="outlined-basic" className="admin-create-user-form-input" label="Ime" type="text" name="ime" value={user.ime} onChange={handleChange} required/>

                            <TextField id="outlined-basic" type="text" className="admin-create-user-form-input" label="Priimek" name="priimek" value={user.priimek} onChange={handleChange} required/>

                            <TextField id="outlined-basic" type="text" name="emso" className="admin-create-user-form-input" label="EMŠO" value={user.emso} onChange={handleChange} required/>

                            <Select labelId="demo-simple-select-label"
                                    id="demo-simple-select" name="spol" value={user.spol} onChange={handleChange} required>
                                <MenuItem value={0}disabled >Izberi spol</MenuItem>
                                {user && spoli.map((spol) => (
                                    <MenuItem key={spol.id} value={spol.id}>{spol.ime}</MenuItem>
                                ))}
                            </Select>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                className={"admin-create-user-city-input"}
                                options={kraji.map((kraj) =>  kraj.ime.trim()+", "+kraj.postnaStevilka)}
                                onChange={(e, value) => handleChange(e,null, {name: "kraj", value: value})}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params}
                                                                    label="Kraj" onChange={handleChange} name={"kraj"} value={user.kraj} />}
                            />
                            <TextField id="outlined-basic" label="E-pošta" variant="outlined" className="admin-create-user-form-input" type="email" name="eposta" value={user.eposta} onChange={handleChange} required/>

                        </div>
                        <div className="input-container-right">

                            <TextField id="outlined-basic" className="admin-create-user-form-input" label="Geslo" variant="outlined" type="password" name="geslo" value={user.geslo} onChange={handleChange} required/>

                            <TextField id="outlined-basic" className="admin-create-user-form-input" label="Geslo" variant="outlined" type="password"  name="Ponovi Geslo" required/>

                            <TextField id="outlined-basic" className="admin-create-user-form-input" label="Telefon" variant="outlined" type="text" name="telefon" value={user.telefon} onChange={handleChange} required/>

                            <TextField id="outlined-basic" className="admin-create-user-form-input" label="Naslov" variant="outlined" name="naslov" value={user.naslov} onChange={handleChange} required/>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                className={"admin-create-user-city-input"}
                                options={razredi.map((razred) =>  ({id: razred.id, label: razred.ime}))}
                                onChange={(e, value) => handleChange(e,null, {name: "razred", value: {id:value.id}})}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params}
                                                                    label="Razred" onChange={handleChange} name={"razred"} value={user.razred} />}
                            />
                            <TextField id="date" label="Birthday" type="date" inputFormat="MM/DD/YYYY" name="datumroj" InputLabelProps={{
                                shrink: true,
                            }} value={user.datumroj} onChange={handleChange} required/>
                        </div>
                    </div>

                    <Button className="submit-button" type="submit" onClick={handleSubmit}>Potrdi</Button>
                </FormControl>
            </div>
        </div>

    );

}

export default AdminEditUser;