import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUpPage";

function App() {
  return (
    <main>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes> */}
      {/* <Login></Login> */}
      <SignUp></SignUp>
    </main>
  );
}

export default App;
