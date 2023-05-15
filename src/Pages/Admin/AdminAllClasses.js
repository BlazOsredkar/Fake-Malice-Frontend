import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import React from 'react';

import {backendAPIendpoint} from "../../App";


const AdminAllClasses = () => {

    const [classes, setClasses] = useState([]);
    const [uspelo, setUspelo] = useState(false);
    const [neuspeh, setNeuspeh] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const getClasses = () => {
        axios.get(`${backendAPIendpoint}/classes/all`, {withCredentials: true})
            .then(res => {
                res.data.sort((a, b) => a.id - b.id);
                setClasses(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })

    }

    useEffect(() => {
        getClasses();
    } ,[]);

    return (
        <div>
            <h1>Vsi razredi, vpisani v bazo:</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Ime</th>
                </tr>
                </thead>
                <tbody>
                {classes.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.ime}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminAllClasses;