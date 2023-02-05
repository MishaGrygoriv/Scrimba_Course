import "./App.scss";

import { MainLayout } from "../components/layout";
import { BrowserRouter } from "react-router-dom";
import { RouterView } from "../router";
import { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";


export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false) 
    }, 2000);
  }, []);

  return (
    <div className="App">
      {
        loading ?
        <div className="App__loader-wrapper">
          <GridLoader
        color={"rgb(0, 25, 165)"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="App__loader"
      />
        </div>
        :
        <BrowserRouter>
        <MainLayout>
          <RouterView />
        </MainLayout>
      </BrowserRouter>
      } 
    </div>
  );
};

export default App;