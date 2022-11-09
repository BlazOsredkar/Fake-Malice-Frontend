import React from "react";
import axios from "axios";
import ScvLogo from '../style/school_logo.png';

const Login = () => {
    const [userData, setUserData] = React.useState({})
    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("Email");
        const password = formData.get("Password");
        const response = await axios.post('http://localhost:5050/api/login', {email, password}, {withCredentials:true})
        console.log(response.data);
        console.log(response.status);
        if(response.status === 200){
            const odgovor = await axios.get('http://localhost:5050/api/user', {withCredentials:true});
            if(odgovor.status === 200){
                setUserData(odgovor.data);
            }
        }

    }
  return (
      <div className="App">
          <img src={ScvLogo} alt="logo" className="logo"/>
          <form onSubmit={handleSubmit}>
              {/*Email*/}
              <p>Email</p>
              <input type="email" className="inputEmail input" name="Email" placeholder="Email" required/>
              <br/>
              {/*Password*/}
              <p>Geslo</p>
              <input type="password" className="input inputPassword" name="Password" placeholder="Geslo" required/>
              <br/>
              {/*Submit*/}
              <div className="button"><input className="submit" type="submit" value="Prijava"/></div>
          </form>
      </div>
    );
}
export default Login;