import {selectUser, selectUserLoading, setUserLoading, userLogin} from "../auth/userSlice";
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import Login from "../Pages/login";
import axios from "axios";
import {store} from "./store";
import {useEffect} from "react";
import Loading from "../components/loading";
import {backendAPIendpoint} from "../App";

const RequireAuth = () => {

    const user = useSelector(selectUser);
    const loading = useSelector(selectUserLoading);


    const handleLoading = async () => {
        store.dispatch(setUserLoading(true));
        try {
            const response = await axios.get(`${backendAPIendpoint}/user`, {withCredentials: true});
            if (response.status === 200) {
                store.dispatch(userLogin(response.data));
            }
        }
        catch (e) {
            console.log(e);
        }
        store.dispatch(setUserLoading(false));
    }
    useEffect(() => {
    loadingF()
    }, []);
    const loadingF = () => {
        handleLoading();
    }

    return (
        <>
            {loading ? <Loading/> : (user ? <Outlet/> : <Login/>)}
        </>
    );
}

export default RequireAuth;