import './App.css';
import { useEffect, useState } from "react";
import  Ideas from "./data/ideas.json"
import Axios from "axios"

function App() {

  const [someData, setSomeDate] = useState("");

  useEffect(()=> {
    Axios.get("https://postgrest-api.mainnet.dandelion.link/tx_metadata?id=eq.2806").
    then(data =>{
      console.log(data)
      setSomeDate(data.data[0].json);
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Ideas.title}</h1>
        <p>{Ideas.homeTown}</p>
        <div >
          {Ideas.ideals.map( e => <p>
            {e.text}
          </p>)}
        </div>

        <h2>{someData}</h2>
      </header>
    </div>
  );
}

export default App;
