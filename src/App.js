import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import NavBar from "./components/NavBar";

function App() {
  // useEffect(() => {
  //   document.body.style.background =
  //     "url('./bg4.jpg') no-repeat center center fixed";

  //   document.body.style.backgroundSize = "cover";
  // }, []);

  return (
    <>
      <div>
        <NavBar />
        <Routes>
         <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
