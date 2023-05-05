import axios from "axios";
import {store} from "../app/store";
import {selectUser, userLogin, userLogout} from "../auth/userSlice";
import {useEffect, useState} from "react";
import Loading from "./loading";
import {backendAPIendpoint} from "../App";
import React from 'react';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [isToastDisplayed, setIsToastDisplayed] = useState(false);


    async function handleSubmit(){
        const response = await axios.post(`${backendAPIendpoint}/user/logout`, {}, { withCredentials: true });
        if (response.status === 200) {
            dispatch(userLogout());
            navigate("/");
            if (!isToastDisplayed) {
                setIsToastDisplayed(true);
                toast("Uspešna odjava", { type: "success" });
            }
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