import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

function MetaDataCall() {
  const [someData, setSomeDate] = useState([]);
  const [loading, isLOading] = useState(true);

  useEffect(() => {
    Axios.get(
      "https://postgrest-api.mainnet.dandelion.link/rpc/get_metadatum"
    ).then((data) => {
      console.log(data.data[0].metadatum);
      setSomeDate(data.data);
      setTimeout(() => {
        isLOading(false);
      }, 500);
    });
  });

  return (
    <div className="container">
      <div
        className="row p-0 m-0 justify-content-around align-items-center"
        style={{ width: "100%", minHeight: "70vh" }}
        key={someData.metadatum}
      >
        {loading
          ? "Loading"
          : someData.map((e) => (
              <div
                className="col-lg-3 col-md-4 col-sm-12 card mb-4 mr-1 p-0"
                style={{
                  color: "white",
                  background: "blue",
                  textAlign: "center",
                  minHeight: "30vh",
                }}
              >
                <div
                  class="card-body"
                  style={{ fontSize: "26px", fontWeight: "600" }}
                >
                  Key: {e.metadatum}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default MetaDataCall;
