import { Routes, Route } from "react-router-dom";

import { App } from "./App";
import { App2 } from "./App2";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/app2" element={<App2 />} />
  </Routes>
);
