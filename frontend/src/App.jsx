import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
