import React from "react";
import Header from "./components/Header";

import "./App.css";
import AppLayout from "./components/AppLayout";

const App: React.FC = () => {
  return (
    <AppLayout>
      <Header />
    </AppLayout>
  );
};

export default App;
