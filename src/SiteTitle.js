import React from "react";
import  Ideas from "./data/ideas.json"

function SiteTitle() {
  return (
    <div style={{marginBottom: "10px", marginTop: "10px"}}>
      <h1>{Ideas.title}</h1>
      <h3>{Ideas.homeTown}</h3>
    </div>
  );
}

export default SiteTitle