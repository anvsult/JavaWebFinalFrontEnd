import React, { useEffect, useState } from 'react';
import { getData } from "../services/api-services";
import ProfileCard from "../components/ProfileCard";
import { format } from 'date-fns'; // Import date-fns for date formatting

function ProfilePage({ userId }) {
    const [profile, setProfile] = useState({});
    const [error, setError] = useState(null);
    const API_URL = `http://localhost:8080/users/${userId}`;

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const data = await getData(API_URL);
            setProfile(data);
        } catch (error) {
            console.error("Error fetching profile: ", error);
            setError(error.message);
        }
    };

    const registeredAtFormatted = profile.registeredAt
        ? format(new Date(profile.registeredAt), 'dd/MM/yyyy') // Format: Day/Month/Year
        : "N/A";
    const dobFormatted = profile.dob
        ? format(new Date(profile.dob), 'dd/MM/yyyy')
        : "N/A";

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {error ? (
                <p className="text-danger">Error: {error}</p>
            ) : (
                <ProfileCard
                    userName={profile.userName}
                    email={profile.email}
                    registeredAt={registeredAtFormatted}
                    dob={dobFormatted}
                    profilePictureUrl={profile.profilePictureUrl}
                    bio={profile.bio}
                />
            )}
        </div>
    );
}

export default ProfilePage;
