import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsTest from "./pages/Components_test";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Findidpw from "./pages/Findidpw";
import Findid from "./pages/Findid";
import Resetpw from "./pages/Resetpw";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Record from "./pages/Record";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ct" element={<ComponentsTest />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/findidpw" element={<Findidpw />}></Route>
          <Route path="/findid" element={<Findid />}></Route>
          <Route path="/resetpw" element={<Resetpw />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/record" element={<Record />}></Route>
          <Route path="/statistics" element={<Statistics />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
