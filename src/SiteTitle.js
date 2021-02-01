import React from "react";
import  Ideas from "./data/ideas.json"

function SiteTitle() {
  return (
    <div>
      <h1>{Ideas.title}</h1>
      <p>{Ideas.homeTown}</p>
    </div>
  );
}

export default SiteTitle