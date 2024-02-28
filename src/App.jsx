import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import AuthLayout from "./components/AuthLayout";
import SignUp from "./components/SignUp";
import Scans from "./components/Scans";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/scan" element={<Scans />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
