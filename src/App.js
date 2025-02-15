import React from "react";
import "./App.css";
import Bugs from "./components/Bugs";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import BugList from "./components/BugsList";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bugs />
    </Provider>
  );
}

export default App;
