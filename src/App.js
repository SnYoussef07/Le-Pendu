import React, { Component } from "react";
import Lettre from "./Lettre";

import "./App.css";

const lettre1 = ["A", "B", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
const lettre2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
const mot = "REACT";

let tabs = { ...{ word: mot, isFind: true } };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lesMots: [...mot]
    };
  }

  generateWord() {
    let tt = [];
    for (const elt of mot) {
      tt.push({ mot: elt, isFind: false });
    }
    return tt;
  }

  render() {
    {
      console.log(this.generateWord());
    }
    return (
      <div className="App">
        <div className="mask">
          <p>{}</p>
        </div>

        <div className="lg1 mt-5">
          {lettre1.map((elt, key) => (
            <Lettre key={key} maLettre={elt} />
          ))}
        </div>
        <div className="lg2 mt-3">
          {lettre2.map((elt, key) => (
            <Lettre key={key} maLettre={elt} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
