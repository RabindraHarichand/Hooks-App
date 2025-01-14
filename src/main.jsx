import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";

import "./index.css";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterWithCustomHook />
  </StrictMode>
);
