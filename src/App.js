import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import FriendsPage from "./pages/FriendsPage";
import MySideBar from "./components/MySideBar";
import ProfilePage from "./pages/ProfilePage";
import PostsPage from "./pages/PostsPage";

function App() {
    return (
        <Router>
            <div style={{ display: "flex", height: "100vh" }}>
                <MySideBar userId={1}/>
                <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/profile/:userId" element={<ProfilePage/>} />
                        <Route path="/friendships/:userId" element={<FriendsPage />} />
                        <Route path="/posts/users/:userId" element={<PostsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
