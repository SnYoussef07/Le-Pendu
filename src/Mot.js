import React from "react";

const Mot = ({mot , index , isFind }) => {
  return <span className="bg-success p-3 border">{isFind ? mot : "___"}</span>;
};

export default Mot;
