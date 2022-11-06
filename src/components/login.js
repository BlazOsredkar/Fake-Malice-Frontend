import React from "react";
import axios from "axios";


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


          <form onSubmit={handleSubmit}>

              <p>Email</p>
              <input type="email" className="inputEmail input" name="Email" placeholder="Email"/>
              <br/>

              <p>Geslo</p>
              <input type="password" className="input inputPassword" name="Password" placeholder="Geslo"/>
              <br/>

              <input className="submit" type="submit" value="Submit"/>
          </form>

          <p>{userData.email}</p>
          <p>{userData.name}</p>

      </div>
    );
}
export default Login;