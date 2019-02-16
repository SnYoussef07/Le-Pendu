import React from "react";

//disabled

const Lettre = ({ letter, index, clickLettre, isEnable }) => {
  return (
    <span>
      {isEnable ? (
        <button
          className="btn btn-info mr-1 mb-3"
          onClick={event => clickLettre(event, letter, index)}
        >
          {letter}
        </button>
      ) : (
        <button className="btn bg-secondary mr-1 mb-3" disabled>
          {letter}
        </button>
      )}

      {letter === "M" && <br />}
    </span>
  );
};

export default Lettre;
