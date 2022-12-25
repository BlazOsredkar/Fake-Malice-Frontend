import axios from "axios";
import {store} from "../app/store";
import {userLogin} from "../auth/userSlice";
import {useEffect} from "react";
import Loading from "./loading";
import {backendAPIendpoint} from "../App";

const Logout = () => {

    async function handleSubmit(){
        const response = await axios.post(`${backendAPIendpoint}/logout`,  {}, {withCredentials:true})
        if(response.status === 200){
            window.location.pathname = "/";
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