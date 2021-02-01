import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios"


function MetaDataCall() {

  const [someData, setSomeDate] = useState([]);
  const [loading, isLOading] = useState(true);

  useEffect(()=> {
    Axios.get("https://postgrest-api.mainnet.dandelion.link/rpc/get_metadatum").then(data => {
      console.log(data.data[0].metadatum)
      setSomeDate(data.data);
      setTimeout(() => {
        isLOading(false)
      }, 500);
    })
  });

  return (
    <div>
      <h1 className="row p-0 m-0 justify-content-around align-items-center" style={{width: "100%", height: "70vh"}} key={someData.metadatum}>{loading ? "Loading" : someData.map(e => 
      <p className="col-3 mr-1 pt-1 p-0" style={{color: "white", background: "blue", textAlign: "center", minHeight: "30vh"}}>Key: {e.metadatum}</p>)}
      </h1>
    </div>
  );
}

export default MetaDataCall