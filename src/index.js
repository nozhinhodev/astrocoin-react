import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./parts/main";
import Send from "./parts/send";
import Get from "./parts/get";
import Reg from "./parts/reg";
import Logn from "./parts/logn";
import Market from "./parts/market";
import Profile from "./parts/profile";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/send" element={<Send/>}/>
                <Route path="/get" element={<Get value={'123asdASD#@#@#'}/>}/>
                <Route path="/r" element={<Reg/>}/>
                <Route path="/l" element={<Logn/>}/>
                <Route path="/soon" element={<Market/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);