import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import SinglePlant from "./pages/SinglePlant";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/collection/:id" element={<SinglePlant />} />
      </Route>
    </Routes>
  );
};

export default App;
