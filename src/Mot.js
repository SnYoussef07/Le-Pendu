import React from "react";

const styleFind = "bg-success p-3 border mr-2"
const styleNotFind = "bg-secondary p-3 border mr-2"

const Mot = ({myLetter , isFind }) => {
  return <span className={isFind ? styleFind : styleNotFind }>{isFind ? myLetter : "_"}</span>;
};

export default Mot;
