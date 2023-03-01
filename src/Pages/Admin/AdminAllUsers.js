import axios from "axios";
import {backendAPIendpoint} from "../../App";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "../../style/Admin/adminAllUsers.css";


const AdminAllUsers = () => {

    const [users, setUsers] = useState([]);
    const [uspelo, setUspelo] = useState(false);
    const [neuspeh, setNeuspeh] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [spoli, setSpoli] = useState([]);
    const [kraji, setKraji] = useState([]);
    const [filteredKraji, setFilteredKraji] = useState([]);
    const [razredi, setRazredi] = useState([]);
    const navigate = useNavigate();

    const getUsers = () => {
        axios.get(`${backendAPIendpoint}/user/all`, {withCredentials: true})
            .then(res => {
                res.data.sort((a, b) => a.id - b.id);
                res.data.map((item) => {
                    item.datumroj= new Intl.DateTimeFormat('en-GB').format(new Date(item.datumroj));
                })
                setUsers(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })

    }


    const  handleUpdate = (e) => {
        e.preventDefault();
        const id = e.target.id;
        navigate(`/admin/user/edit/${id}`);
    }


    const handleDelete = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const confirm = window.confirm("Ali ste prepričani, da želite izbrisati uporabnika?");
        if (confirm) {
            axios.delete(`${backendAPIendpoint}/user/delete/${id}`, {withCredentials: true})
                .then(res => {
                    setUspelo(true);
                    getUsers();
                })
                .catch(err => {
                    setNeuspeh(true);
                })
        }

    }

    const handleChangeAdmin = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const confirm = window.confirm("Ali ste prepričani, da želite spremeniti uporabnikov status?");
        const admin = e.target.dataset.admin;
        const newAdmin = admin !== "true";
        console.log(newAdmin);
        if (confirm) {
            axios.put(`${backendAPIendpoint}/user/update/${id}`, {isadmin:newAdmin}, {withCredentials: true})
                .then(res => {
                    setUspelo(true);
                    getUsers();
                })
                .catch(err => {
                    setNeuspeh(true);
                })
        }


    }


    useEffect(() => {
        getUsers();
    },[]);


    return (
        <div>
            <h1>Vsi uporabniki</h1>
            <button onClick={() => navigate("/admin/createUser")} className="add-user">Dodaj uporabnika</button>

            {loading ? <CircularProgress/> : (
            <table >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Ime</th>
                    <th>Priimek</th>
                    <th>E-pošta</th>
                    <th>EMŠO</th>
                    <th>Datum rojstva</th>
                    <th>Telefon</th>
                    <th>Spol</th>
                    <th>Kraj</th>
                    <th>Razred</th>
                    <th>Admin</th>
                    <th>Uredi</th>
                    <th>Izbriši</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.ime}</td>
                        <td>{user.priimek}</td>
                        <td>{user.eposta}</td>
                        <td>{user.emso}</td>
                        <td>{user.datumroj}</td>
                        <td>{user.telefon}</td>
                        <td>
                            {user.spol?.ime || "N/A"}
                        </td>
                        <td>
                            {user.kraj?.ime || "N/A"}
                        </td>

                        <td>
                            {user.razred?.ime || "N/A"}
                        </td>
                        <td onClick={handleChangeAdmin} id={user.id} data-admin={user.isadmin}>{user.isadmin.toString()}</td>
                        <td><button id={user.id} onClick={handleUpdate}>Uredi</button></td>
                        <td><button id={user.id} onClick={handleDelete}>Izbriši</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
    )

}

export default AdminAllUsers;