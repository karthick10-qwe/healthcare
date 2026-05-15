import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ClaimTimeline from "./pages/ClaimTimeline";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        {/* FIXED ROUTE */}
        <Route path="/timeline/:id" element={<ClaimTimeline />} />
      </Routes>
    </>
  );
}

export default App;