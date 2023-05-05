import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {backendAPIendpoint} from "../../App";
import React from 'react';


const AdminEditSchool = () => {


    const [school, setSchool] = useState({
        ime: '',
        kratica: '',
    });


    const id = useParams().id;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSchool({ ...school, [name]: value });
    };

    const loadschool = () => {
        axios.get(`${backendAPIendpoint}/school/find/${id}`, {withCredentials: true})
            .then(res => {
                setSchool(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadschool();
    },[id]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        axios.put(`${backendAPIendpoint}/school/update/${id}`, school, {withCredentials: true})
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Šola uspešno urejena!")
                navigate("/admin/school/all");

                setSchool({
                    ime: '',
                    kratica: '',
                })

            })
            .catch(err => {
                console.log(err);
                alert(err.response.data.message);
            })
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Uredi šolo</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="ime">Ime</label>
                            <input type="text" className="form-control" id="ime" name="ime" value={school.ime} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="kratica">Kratica</label>
                            <input type="text" className="form-control" id="kratica" name="kratica" value={school.kratica} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Uredi</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminEditSchool;