import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Views/Login";
import ClassList from "./Views/ClassList";
import ClassDetail from "./Views/ClassDetail";
import InstructureDetail from "./Views/InstructureDetail";
import InstructureList from "./Views/InstructureList";
import Navbar from "./Components/Navigation";
import PrivateComponent from "./Components/PrivateComponent";
import ToLoginHandler from "./Components/ToLoginHandler";

function App() {
  const { isLogin } = useSelector((state) => state);

  return (
    <>
      {isLogin && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <ToLoginHandler>
              <Login />
            </ToLoginHandler>
          }
        />
        <Route
          path="/classlist"
          element={
            <PrivateComponent>
              <ClassList />
            </PrivateComponent>
          }
        />
        <Route
          path="/classdetail/:id"
          element={
            <PrivateComponent>
              <ClassDetail />
            </PrivateComponent>
          }
        />
        <Route
          path="/instructurelist"
          element={
            <PrivateComponent>
              <InstructureList />
            </PrivateComponent>
          }
        />
        <Route
          path="/instructuredetail/:id"
          element={
            <PrivateComponent>
              <InstructureDetail />
            </PrivateComponent>
          }
        />
        <Route
          path="*"
          element={
            <main>
              <p>Not Found</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
