import React, { Component } from "react";
import Lettre from "./Lettre";
import Mot from "./Mot";

import "./App.css";

const allLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const myWord = "REACT";

const generateAllLetter = () => {
  let tabsLetter = [];
  for (const elt of allLetter) {
    tabsLetter.push({ id: tabsLetter.length, letter: elt, isEnable: true });
  }
  return tabsLetter;
};

const generateWord = () => {
  let tabsWord = [];
  for (const elt of myWord) {
    tabsWord.push({ myLetter: elt, isFind: false });
  }
  return tabsWord;
};

/* Default State */
const DEFAULT_STATE = {
  word: generateWord(),
  allLetter: generateAllLetter(),
  cptWin: generateWord().length,
  guessecount: 0
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...DEFAULT_STATE };
  }

  handleClick = (event, letter, index) => {
    event.preventDefault();
    let cWord = [...this.state.word];
    let cLetter = [...this.state.allLetter];
    let cptWin = this.state.cptWin;
    let guessecount = this.state.guessecount;
    guessecount++;
    cWord.map(elt => {
      if (elt.myLetter === letter) {
        elt.isFind = true;
        cptWin--;
        guessecount--;
      }
    });
    cLetter.map(elt => elt.id === index && (elt.isEnable = false));
    this.setState({ word: cWord, allLetter: cLetter, cptWin, guessecount });
  };

  handleReset = event => {
    event.preventDefault();
    this.setState(DEFAULT_STATE);
    /*force the reset of the */
    this.setState({ word: generateWord(), allLetter: generateAllLetter() });
  };

  render() {
    return (
      <div className="App">
        {/* le masque */}
        <div className="mask mt-5">
          {this.state.word.map((elt, key) => (
            <Mot myLetter={elt.myLetter} isFind={elt.isFind} key={key} />
          ))}
        </div>

        {this.state.guessecount > 10 ? (
          <div className="mt-5 text-danger">
            <h1 className="border p-3 mb-3">YOU LOSE</h1>
            <button
              className="btn btn-primary"
              onClick={event => this.handleReset(event)}
            >
              Recommencer
            </button>
          </div>
        ) : this.state.cptWin === 0 ? (
          <div className="mt-5 text-success">
            <h1 className="border p-3 mb-3">YOU WIN</h1>
            <button
              className="btn btn-primary"
              onClick={event => this.handleReset(event)}
            >
              Recommencer
            </button>
          </div>
        ) : (
          <div className="mt-5">
            <h3 className="mb-5">nombre d'essai {this.state.guessecount}</h3>
            {this.state.allLetter.map(elt => (
              <Lettre
                key={elt.id}
                letter={elt.letter}
                index={elt.id}
                clickLettre={this.handleClick}
                isEnable={elt.isEnable}
              />
            ))}
          </div>
        )}
        {/*Image du pendu */}
        <div className="mt-5">
          <img src={require(`./img/etapes${this.state.guessecount}.jpg`)} />
        </div>
      </div>
    );
  }
}

export default App;
