import React from "react";
import axios from "axios";
import ScvLogo from '../style/school_logo.png';
import {store} from "../app/store";
import {setUserLoading, userLogin} from "../auth/userSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {backendAPIendpoint} from "../App";
import LoginImage from '../assets/Login_Malice.svg'

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    async function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const eposta = formData.get("eposta");
        const geslo = formData.get("geslo");
        store.dispatch(setUserLoading(true));
        try {
            const response = await axios.post(`${backendAPIendpoint}/user/login`, {eposta, geslo}, {withCredentials:true})

            if(response.status === 200){
                const odgovor = await axios.get(`${backendAPIendpoint}/user`, {withCredentials:true});
                if(odgovor.status === 200){
                    store.dispatch(userLogin(odgovor.data));
                }
            }
        }
        catch (e) {}
        store.dispatch(setUserLoading(false));

    }
  return (
      <>
      <div className="login-page">
            <div className="login-page-left">
          <img src={LoginImage} alt="logo" className="logo"/>
            </div>
            <div className="login-page-right">
          <form onSubmit={handleSubmit} className={"login-form"}>
              {/*Email*/}
              <p className={"login-form-title"}>Prijava v malice</p>
                <div className="login-form-input">
                <EmailIcon />
              <input type="email" className="inputEmail input" name="eposta" placeholder="Email" required/>
                </div>
              {/*Password*/}

                <div className="login-form-input">
                    <LockIcon />
              <input type="password" className="input inputPassword" name="geslo" placeholder="Geslo" required/>
                </div>
              {/*Submit*/}
              <input className="button" type="submit" value="Prijava"/>
              <Link to="/forgotPassword" className="PozabilGeslo">Pozabljeno geslo?</Link>
          </form>
            </div>

      </div>

      </>
    );
}
export default Login;