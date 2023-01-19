import React from "react";
import { Routes, Route } from "react-router-dom";
import Pages from "./View/Pages";
import SearchListItem from "./components/SearchListItem";
import Stats from "./components/Stats";

function router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pages />}></Route>
        <Route path="/search" element={<SearchListItem />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
      </Routes>
    </div>
  );
}

export default router;
