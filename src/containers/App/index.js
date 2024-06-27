import React from "react";
import { Route, Routes } from "react-router-dom";
import { routerUser } from "../../routers/router";
import Header from "../../components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routerUser.map((route, index) => {
          return (
            <Route
              key={index}
              element={route.element}
              path={route.path}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
