import {selectUser, selectUserLoading, setUserLoading, userLogin} from "../auth/userSlice";
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import Login from "../components/login";
import axios from "axios";
import {store} from "./store";
import {useEffect} from "react";
import Loading from "../components/loading";

const RequireAuth = () => {

    const user = useSelector(selectUser);
    const loading = useSelector(selectUserLoading);


    const handleLoading = async () => {
        store.dispatch(setUserLoading(true));
        try {
            const response = await axios.get('http://localhost:5050/api/user', {withCredentials: true});
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
        handleLoading();
    }, []);
    if(loading){
        return <Loading/>
    }
    if(!user){
        return <Login/>
    }
    return <Outlet/>
}

export default RequireAuth;