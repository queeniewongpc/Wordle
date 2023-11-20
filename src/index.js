import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  Router,
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "./pages/App";
import Rule from "./pages/Rule";
import Game from "./pages/Game";
import NaviBar from "./components/NaviBar";
import combineReducers from "./reducers/wordleReducers";

const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);

    window.localStorage.setItem("wordle_game_state", serialisedState);
  } catch (err) {
    console.log("error saving the state to local store:");
    console.log(err);
  }
};

const loadState = () => {
  try {

    const serialisedState = window.localStorage.getItem("wordle_game_state");

    if (!serialisedState) return undefined;

    return JSON.parse(serialisedState);
  } catch (err) {
    console.log("error loading state from local store:");
    console.log(err);
    return undefined;
  }
};


const oldState = loadState();

const store = createStore(combineReducers, oldState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NaviBar />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/game/:difficulty" element={<Game />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/game" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);