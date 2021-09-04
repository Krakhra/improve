import "./Navbar.css";
import { GoogleLogin } from "react-google-login";

const Navbar = () => {
  const test = (response) => {
    console.log("logged in");
  };

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
          onSuccess={test}
          onFailure={test}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Navbar;
