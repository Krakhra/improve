import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <button>Login With Google</button>
    </div>
  );
}

export default App;
