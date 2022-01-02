import "./Navbar.css";
import { GoogleLogin } from "react-google-login";
import axios from 'axios';

const Navbar = () => {

  const login = (response) =>{
    // axios.post("http://localhost:8000/login",{
    //   params:{
    //     data:"test"
    //   }
    // })
    if(!response || !response.googleId || !response.profileObj){
      return
    }

    axios.post("http://localhost:8000/login",{
      params:{
        googleid:response.googleId,
        firstName:response.profileObj.givenName,
        lastName:response.profileObj.familyName
      }
    })
  }

  return (
    <div className="Navbar">
      <span className="contentContainer">
        <span id="homeNav">Improve.ai</span>
      </span>

      <div style={{width:"80%"}}></div>
      <div id="navlink">
        <GoogleLogin
          clientId="870147874229-cbh6ihfk98cc627j8lqf2q2188a8n7sl.apps.googleusercontent.com"
          buttonText="Login"
          className="navLink"
          onSuccess={login}
          onFailure={login}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Navbar;
