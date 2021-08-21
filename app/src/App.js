import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
      />
      <button onClick={()=>console.log(username,password)}>Submit</button>
    </div>
  );
}

export default App;
