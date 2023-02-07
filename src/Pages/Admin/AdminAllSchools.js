import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {backendAPIendpoint} from "../../App";


const AdminAllSchools = () => {

    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const getSchools = () => {
        axios.get(`${backendAPIendpoint}/school/all`, {withCredentials: true})
            .then(res => {
                res.data.sort((a, b) => a.id - b.id);
                setSchools(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })

    }

    const handleDelete = (id) => {

    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const id = e.target.id;
        navigate(`../school/update/${id}`);
    }

    useEffect(() => {
        getSchools();
    } ,[]);


    return (
        <div>
            <h1>Vse šole, vpisane v bazo:</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Ime</th>
                    <th>Kratica</th>
                    <th>Uredi</th>
                    <th>Izbriši</th>
                </tr>
                </thead>
                <tbody>
                {schools.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.ime}</td>
                        <td>{item.kratica}</td>
                        <td><button onClick={handleUpdate} id={item.id} >Update</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminAllSchools;