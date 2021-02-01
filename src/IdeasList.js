import React from "react";
import  Ideas from "./data/ideas.json"

function IdeasList() {

  return (
    <div>
      <div >
          {Ideas.ideals.map( e => <p key={e.idV}>
            {e.text}
          </p>)}
      </div>
    </div>
  );
}

export default IdeasList