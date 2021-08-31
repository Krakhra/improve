import "./App.css";
import { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const test = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId="870147874229-cbh6ihfk98cc627j8lqf2q2188a8n7sl.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={test}
        onFailure={test}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
