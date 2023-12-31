import React, { useState } from "react";
import NaviBar from "../components/NaviBar";
import { useParams } from "react-router";
import { shallowEqual, useSelector } from "react-redux";
import InputHistory from "../components/InputHistory";
import "./Game.css";

export default function Game() {
  const pathParams = useParams();
  const difficulty = pathParams.difficulty;
  const diffInfo = {
    normal: { total: 6, length: 6 },
    hard: { total: 5, length: 7 },
  };

  const message = useSelector((state) => {
    return state.getMessage;
  }, shallowEqual);

  return (
    <div className="game-outline-box">
      <div className="header-message">
        Please input words with length of {diffInfo[difficulty].length}
      </div>
      <div className="message-box">{message}</div>
      <InputHistory difficulty={difficulty} diffInfo={diffInfo} />
    </div>
  );
}
