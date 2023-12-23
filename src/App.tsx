import React from "react";
import Header from "./components/Header";

import "./App.css";
import AppLayout from "./components/AppLayout";
import Balance from "./components/Balance";
import { GlobalContextProvider } from "./context/GlobalState";

const App: React.FC = () => {
  return (
    <AppLayout>
      <GlobalContextProvider>
        <Header />
        <div className="">
          <Balance />
        </div>
      </GlobalContextProvider>
    </AppLayout>
  );
};

export default App;
