import React from "react";
import axios from "axios";
import ScvLogo from '../style/school_logo.png';
import {store} from "../app/store";
import {setUserLoading, userLogin} from "../auth/userSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {backendAPIendpoint} from "../App";

const Login = () => {
    async function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const eposta = formData.get("eposta");
        const geslo = formData.get("geslo");
        store.dispatch(setUserLoading(true));
        try {
            const response = await axios.post(`${backendAPIendpoint}/login`, {eposta, geslo}, {withCredentials:true})

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
      <div className="App">
          <img src={ScvLogo} alt="logo" className="logo"/>
          <form onSubmit={handleSubmit}>
              {/*Email*/}
              <p>Email</p>
              <input type="email" className="inputEmail input" name="eposta" placeholder="Email" required/>
              <br/>
              {/*Password*/}
              <p>Geslo</p>
              <input type="password" className="input inputPassword" name="geslo" placeholder="Geslo" required/>
              <br/>
              {/*Submit*/}
              <div className="button"><input className="submit" type="submit" value="Prijava"/></div>
              {/*<Link to="/forgotPassword" className="PozabilGeslo">Pozabljeno geslo?</Link>*/}
          </form>

      </div>

      </>
    );
}
export default Login;