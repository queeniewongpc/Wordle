import React from "react";
import "./DifficultyBox.css";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DifficultyBox() {
  const difficulty = useSelector(
    (state) => state.getGameAttribute.gameDifficulty,
    shallowEqual
  );

  const numAttempts = useSelector((state) => state.getAttempts, shallowEqual);

  let normalStr =
    difficulty === "normal" && numAttempts > 0 ? "Normal (Continue)" : "Normal";
  let hardStr =
    difficulty === "hard" && numAttempts > 0 ? "Hard (Continue)" : "Hard";
  return (
    <div className="diff-box-outer-container">
      <a href="/game/normal">
        <div className="game-level-box">{normalStr}</div>
      </a>
      <a href="/game/hard">
        <div className="game-level-box">{hardStr}</div>
      </a>
    </div>
  );
}
