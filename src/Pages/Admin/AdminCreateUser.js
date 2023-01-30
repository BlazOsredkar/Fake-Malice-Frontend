import axios from "axios";
import React, {useEffect, useState} from "react";
import {backendAPIendpoint} from "../../App";

import "../../style/adminCreateUser.css";
import {Autocomplete, TextField} from "@mui/material";


const AdminCreateUser = () => {

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
        kraj: 0,
    });

    const [spoli, setSpoli] = useState([]);
    const [kraji, setKraji] = useState([]);
    const [filteredKraji, setFilteredKraji] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${backendAPIendpoint}/user/register`, user, {withCredentials: true})
            .then(res => {
            alert("Uporabnik uspešno ustvarjen")
                navigator.navigate("/admin/allUsers");

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
                kraj: 0,
            })

        })
            .catch(err => {
                console.log(err);
                alert(err.response.data.message);
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
                    setFilteredKraji(res.data);
                }
                )
    }

    useEffect(() => {
        getSpol();
        getKraji();
    } ,[]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value || "";
        if(searchTerm.length > 0) {
        const filtered = kraji.filter(
            (kraj) => kraj.ime.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || kraj.postnaStevilka.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        );
        setFilteredKraji(filtered);
        } else {
            setFilteredKraji(kraji);
        }
    }

    return (
        <div className={"admin-create-user"}>
            <div className={"admin-create-user-form"}>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <div className="input-container-left">
                            <label>Ime</label>
                            <input type="text" name="ime" value={user.ime} onChange={handleChange} required/>
                            <label>Priimek</label>
                            <input type="text" name="priimek" value={user.priimek} onChange={handleChange} required/>
                            <label>EMŠO</label>
                            <input type="text" name="emso" value={user.emso} onChange={handleChange} required/>
                            <label>E-pošta</label>
                            <input type="email" name="eposta" value={user.eposta} onChange={handleChange} required/>
                            <label>Spol</label>
                            <select name="spol" value={user.spol} onChange={handleChange} required>
                                <option value={0}disabled >Izberi spol</option>
                                {user && spoli.map((spol) => (
                                    <option key={spol.id} value={spol.ime}>{spol.ime}</option>
                                ))}
                            </select>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                name={"kraj"}
                                options={kraji.map((kraj) =>  kraj.ime.trim()+", "+kraj.postnaStevilka)}

                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Kraj" onChange={handleChange} name={"kraj"} value={user.kraj} />}
                            />

                        </div>
                        <div className="input-container-right">
                            <label>Geslo</label>
                            <input type="password" name="geslo" value={user.geslo} onChange={handleChange} required/>
                            <label>Ponovi geslo</label>
                            <input type="password" name="Ponovi Geslo" required/>
                            <label>Telefon</label>
                            <input type="text" name="telefon" value={user.telefon} onChange={handleChange} required/>
                            <label>Naslov</label>
                            <input type="text" name="naslov" value={user.naslov} onChange={handleChange} required/>
                            <label>Datum rojstva</label>
                            <input type="date" name="datumroj" value={user.datumroj} onChange={handleChange} required/>
                        </div>
                    </div>
                    <button className="submit-button" type="submit">Potrdi</button>
                </form>
            </div>
        </div>

    );

}

export default AdminCreateUser