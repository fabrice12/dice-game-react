import './App.css';
import Header from "./components/header/Header";
import Registration from "./components/registration/registration";
import axios from "axios";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import Game from "./components/game/Game";

axios.defaults.baseURL = "http://127.0.0.1:9060"
axios.defaults.headers.post["Content-Type"] = 'application/json'

function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Registration/>}/>
                    <Route path="/game" element={<Game/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
