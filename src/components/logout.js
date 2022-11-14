import axios from "axios";
import {store} from "../app/store";
import {userLogin} from "../auth/userSlice";
import {useEffect} from "react";
import Loading from "./loading";

const Logout = () => {

    async function handleSubmit(){
        const response = await axios.post('http://localhost:5050/api/logout',  {}, {withCredentials:true})
        if(response.status === 200){
            window.location.href = "http://localhost:3000/";
        }


    }
    useEffect(() => {
        handleSubmit();
    }   ,[])

    return (
        <Loading/>
    );
}

export default Logout;