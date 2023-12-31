import { combineReducers } from "redux";
import {
  normalWords,
  hardWords,
} from "../files/wordsCollection";

function messageReducer(state = "", action) {
  if (action.type === "CHANGE_MESSAGE") {
    return action.value;
  }

  if (action.type === "RESET") {
    return "";
  }
  return state;
}

function historyReducer(state = [], action) {
  if (action.type === "ADD_TO_HISTORY") {
    let copyState = [...state];
    copyState.push(action.value);
    return copyState;
  }

  if (action.type === "RESET") {
    return [];
  }
  return state;
}

function attemptsReducer(state = 0, action) {
  if (action.type === "ADD_ONE_ATTEMPT") {
    return state + 1;
  }

  if (action.type === "RESET") {
    return 0;
  }
  return state;
}

function genTargetWord(difficulty) {
  const idx = Math.floor(Math.random() * 100);
  if (difficulty === "normal") {
    return normalWords[idx];
  } else {
    return hardWords[idx];
  }
}

function setGameAttribute(
  state = { isGameOn: false, gameDifficulty: null, answer: null },
  action
) {
  if (action.type === "RESET") {
    let word = genTargetWord(action.value);
    return {
      isGameOn: true,
      gameDifficulty: action.value,
      answer: word,
    };
  }

  return state;
}

function usedWordsReducer(state = [], action) {
  if (action.type === "ADD_WORD") {
    const newState = [...state];
    newState.push(action.value);
    return newState;
  }

  if (action.type === "RESET") {
    return [];
  }

  return state;
}

function isGameOver(state = false, action) {
  if (action.type === "SET_GAME_OVER") {
    return true;
  }
  if (action.type === "RESET") {
    return false;
  }
  return state;
}

export default combineReducers({
  getMessage: messageReducer,
  getHistory: historyReducer,
  getAttempts: attemptsReducer,
  getGameAttribute: setGameAttribute,
  getUsedWords: usedWordsReducer,
  isGameOver: isGameOver,
});
