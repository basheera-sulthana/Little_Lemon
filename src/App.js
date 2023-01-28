import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import NavBar from "./components/NavBar";
import BookingForm from "./components/BookingForm";

function App() {
  // useEffect(() => {
  //   document.body.style.background =
  //     "url('./bg4.jpg') no-repeat center center fixed";

  //   document.body.style.backgroundSize = "cover";
  // }, []);

  // const [number, setNumber] = React.useState(1);
  // function increment() {
  //   setNumber((prevNumber) => prevNumber + 1);
  // }
  // after return stmt
  // <h1 data-test-id="currentNumber"> {number} </h1>
  //       <button data-testid="add-one" onClick={increment}>
  //           Add one
  //       </button>

  return (
    <>
      <div>
        <NavBar />
        <Routes>
           <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <BookingForm />
      </div>
    </>
  );
}

export default App;
