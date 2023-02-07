import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
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

    const handleDelete = (id) => {

    }

      const handleUpdate = (id) => {

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
                    <th>Šolsko leto</th>
                    <th>Uredi</th>
                    <th>Izbriši</th>
                </tr>
                </thead>
                <tbody>
                {classes.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.ime}</td>
                        <td>{item.sol_leto}</td>
                        <td><button onClick={() => handleUpdate(item.id)}>Update</button></td>
                        <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminAllClasses;