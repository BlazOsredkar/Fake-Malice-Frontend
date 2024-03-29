import axios from "axios";
import {backendAPIendpoint} from "../../App";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import React from 'react';



const AdminAllCities = () => {


    const [cities, setCities] = useState([]);
    const [uspelo, setUspelo] = useState(false);
    const [neuspeh, setNeuspeh] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const getCities = () => {
        axios.get(`${backendAPIendpoint}/cities/all`, {withCredentials: true})
            .then(res => {
                res.data.sort((a, b) => a.id - b.id);
                setCities(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })


    }


    useEffect(() => {
        getCities();
    } ,[]);



    return (
        <div style={{height:"100vh", overflowY:"scroll"}}>
            <h1>Kraji na voljo:</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Ime</th>
                    <th>Poštna št.</th>
                </tr>
                </thead>
                <tbody>
                    {cities.map((city) => (
                        <tr key={city.id}>
                            <td>{city.id}</td>
                    <td>{city.ime}</td>
                    <td>{city.postnaStevilka}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )


}

export default AdminAllCities;