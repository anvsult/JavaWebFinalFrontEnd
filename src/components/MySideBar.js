import React from "react";
import '../styles/MySideBar.css';
import {useNavigate} from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();
    const handleLogoClick = () => (
        navigate("/")
    )
    const handleProfileClick = () => (
        navigate("/profile")
    )

    return (
        <div className="sidebar d-flex flex-column align-items-center bg-teal p-4 itim-regular">
            <h1 className="text-white mb-4"
                onClick={handleLogoClick}
                style={{ cursor: "pointer" }}>
            Linkify</h1>

            <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnkvWswxo4kJ2q9fcnsEx9GD-Q_npU7cEcA&s"} // We will replace this with the profile from the backend
                alt="Profile"
                className="rounded-circle mb-3 sidebar-img"
                onClick={handleProfileClick}
                style={{ cursor: "pointer" }}
            />

            <h2 className="text-white"
                onClick={handleProfileClick}
                style={{ cursor: "pointer" }}>
            Will Smith</h2> {/* We will replace this with the profile name from the backend*/}

        </div>
    );
}

export default Sidebar;