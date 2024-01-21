import React from "react";
import Router from "./routes/route";
import Loading from "./components/ui/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/ui/Navigation";

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<Loading />}>
        <ToastContainer />
        <Navigation />
        <main className="my-20 px-3 max-w-7xl mx-auto">
          <Router />
        </main>
      </React.Suspense>
    </div>
  );
};

export default App;
