import React from "react";
import Header from "./components/Header";

import "./App.css";
import AppLayout from "./components/AppLayout";
import Balance from "./components/Balance";

const App: React.FC = () => {
  return (
    <AppLayout>
      <Header />
      <div className="">
        <Balance />
      </div>
    </AppLayout>
  );
};

export default App;
