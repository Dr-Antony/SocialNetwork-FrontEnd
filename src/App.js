
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";


//Компоненты
import Navigation from "./Components/NavBar/Navbar";
import HomePage from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import Messages from "./Components/Messages/Messages";
import Login from "./Components/Login/Login"
import Registration from "./Components/Register/Registration";
//Компоненты
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
