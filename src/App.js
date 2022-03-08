import React from "react";
import { Route, Routes } from "react-router-dom";
import ClassList from "./Views/ClassList";
import ClassDetail from "./Views/ClassDetail";
import InstructureDetail from "./Views/InstructureDetail";
import InstructureList from "./Views/InstructureList";
import Navbar from "./Components/Navigation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ClassList />} />
        <Route path="/classdetail/:id" element={<ClassDetail />} />
        <Route path="/instructurelist" element={<InstructureList />} />
        <Route path="/instructuredetail/:id" element={<InstructureDetail />} />
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
