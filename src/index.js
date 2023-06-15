import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
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

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
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
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
