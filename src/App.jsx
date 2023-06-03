import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import MyTask from "./components/MyTask";
import OTP from "./components/OTP";
import Auth from "./components/auth";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";

{
  /* <Router>
<Route path="/" exact component={LogIn} />
<Route path="/register" component={Register} />
</Router> */
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LogIn />
      <Auth />
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/mytask" element={<MyTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
