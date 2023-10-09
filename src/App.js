
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";


//Компоненты
import Navigation from "./Components/NavBar/NavbarTop";
import HomePage from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import Messages from "./Components/Messages/Messages";
import Login from "./Components/Login/Login"
import Registration from "./Components/Register/Registration";
import Footer from "./Components/Footer/Footer";
import { fetchAuthMe } from "./redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//Компоненты
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
