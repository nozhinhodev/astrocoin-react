import logo from './logo.svg';
import './App.css';
import Header from "./parts/header";
import Card from "./parts/Card";
import Main from "./parts/main";
import Profile from "./parts/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Send from "./parts/send";
function App() {
  return (

    <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/" exact={true}/>
            <Route element={<Send/>} path="/send" exact={true}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
