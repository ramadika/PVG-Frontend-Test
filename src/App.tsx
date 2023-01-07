import React from "react";
// components
import BaseLayout from "./components/BaseLayout";
import Main from "./pages/Main";
// assets
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen">
      <BaseLayout>
        <Main />
      </BaseLayout>
    </div>
  );
}

export default App;
