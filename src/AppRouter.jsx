import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </>
  );
};
export default AppRouter;
