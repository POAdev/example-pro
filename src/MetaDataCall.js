import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios"


function MetaDataCall() {

  const [someData, setSomeDate] = useState("");

  useEffect(()=> {
    Axios.get("https://postgrest-api.mainnet.dandelion.link/tx_metadata?id=eq.2806").then(data => {
      console.log(data.data[0].json)
      setSomeDate(data.data[0].json);
    })
  });

  return (
    <div>
      <h1 style={{color: "green"}}>{someData}</h1>
    </div>
  );
}

export default MetaDataCall