import React from "react";
import Header from "./components/Header";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-start py-20">
      <Header />
    </div>
  );
};

export default App;
