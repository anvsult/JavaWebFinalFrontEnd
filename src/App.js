import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import FriendsPage from "./pages/FriendsPage";
import MySideBar from "./components/MySideBar";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <Router>
            <div style={{ display: "flex", height: "100vh" }}>
                <MySideBar />
                <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/profile" element={<ProfilePage userId={1}/>} />
                        <Route path="/friends" element={<FriendsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
