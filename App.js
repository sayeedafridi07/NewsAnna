import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState("0");
  const apikey = "4b583a00cbea4f22bc40af6d6b42d737";
  return (
    <BrowserRouter>
      <div className="progress" style={{ height: 3 }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: `${progress}` }}
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News
              key="general"
              setProgress={setProgress}
              pageSize={3}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              key="business"
              setProgress={setProgress}
              pageSize={3}
              country="in"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment" apikey={apikey}
              setProgress={setProgress}
              pageSize={3}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              key="general"
              setProgress={setProgress}
              pageSize={3}
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              key="health"
              setProgress={setProgress}
              pageSize={3}
              country="in"
              category="health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              key="science"
              setProgress={setProgress}
              pageSize={3}
              country="in"
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              key="sports"
              setProgress={setProgress}
              pageSize={3}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              key="technology"
              setProgress={setProgress}
              pageSize={3}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
