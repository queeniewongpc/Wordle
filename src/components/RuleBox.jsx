import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./RuleBox.css";

export default function RuleBox() {
  const gameAttribute = useSelector(
    (state) => state.getGameAttribute,
    shallowEqual
  );
  console.log(gameAttribute.isGameOn);
  let gameURL = `/game/${gameAttribute.gameDifficulty}`;
  return (
    <div className="outer-container">
      <div className="rule-content">
        <p>
            <h1>Games Rules</h1>

            <ul>
            <li>You are going to play Wordle!</li>
            <li>There are two game modes: Normal and Hard</li>
            <li>For a Normal Game, you will find 6 letter words and given 6 opportunities.</li>
            <li>For a Hard Game, you will find 7 letter words and only given only 5 opportunities.</li>
            <li>GREEN: Letter is in the word and in the correct spot.</li>
            <li>YELLOW: Letter is in the word but in the wrong spot.</li>
            <li>GREY: Letter is not in the word in any spot.</li>
            </ul>
        </p>
      </div>
      {gameAttribute.isGameOn ? (
        <a href={gameURL}>
          <div
            className="back-to-game-button"
            disabled={!gameAttribute.isGameOn}
          >
            Back To Game
          </div>
        </a>
      ) : null}
    </div>
  );
}
