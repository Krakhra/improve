import "./Home.css";
import back from "../../assets/background.jpg"
import Login from "./Login/Login";

const Home = () => {
  return (
    <div className="Home">
      <div className="homeImage">
        <img src = {back}/>
      </div>

      <div className="loginContainer">
        <Login/>
      </div>
    </div>
  );
};

export default Home;
