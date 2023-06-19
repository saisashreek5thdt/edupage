import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./assets/fonts/stylesheet.scss";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "tw-elements";
import {
  DesertInfo,
  DesertTypes,
  HabitatInfo,
  OasisInfo,
  SandDunes,
  Vegetation,
  Trivia,
} from "./pages";
import Asses from "./pages/Asses";

import Footer from "./pages/Footer";

import store from "./store";
import { Provider } from "react-redux";
import ScoreBoard from "./pages/ScoreBoard";

import Assess2 from "./pages/Asses2";
import Asses3 from "./pages/Asses3";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/page/desert/info/" element={<DesertInfo />} />
        <Route path="/page/desert/types/" element={<DesertTypes />} />
        <Route path="/page/desert/habitat/" element={<HabitatInfo />} />
        <Route path="/page/desert/oasis/info/" element={<OasisInfo />} />
        <Route path="/page/desert/sanddunes/" element={<SandDunes />} />
        <Route path="/page/desert/vegetation/" element={<Vegetation />} />
        <Route path="/page/desert/trivia/" element={<Trivia />} />
        <Route path="/page/desert/assesment/" element={<Asses />} />
        <Route path="/page/desert/assesment2" element={<Assess2 />} />
        <Route path="/page/desert/assesment3" element={<Asses3 />} />
        <Route
          path="/page/desert/assesment/scoreboard"
          element={<ScoreBoard />}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
