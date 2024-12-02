import React from 'react';
import { Card } from "react-bootstrap";
import '../styles/PostCard.css';
import {useNavigate} from "react-router-dom";

export default function PostCard({ userId, username, profileImageUrl, postImageUrl, postDescription, postCreatedAt}) {
    const navigate = useNavigate();
    const handleProfileClick = () => {
        navigate(`/profile/${userId}`);
    };

    return (
        <Card style={{ width: '18rem' }} className="mb-3 shadow rounded-4">
            <Card.Header className="bg-teal text-white text-start">
                <div className="d-flex align-items-center">
                    <Card.Img
                        src={profileImageUrl}
                        alt="Profile"
                        className="rounded-circle profile-picture me-2"
                        onClick={handleProfileClick}
                        style={{cursor: 'pointer'}}
                    />
                    <Card.Text
                        onClick={handleProfileClick}
                        style={{cursor: 'pointer'}}>
                            {username}
                    </Card.Text>
                </div>
            </Card.Header>
            <Card.Body className="text-start">
                <div className="image-container">
                    <Card.Img
                        src={postImageUrl}
                        alt="Post"
                        className="card-img-top"
                    />
                </div>
                <Card.Text className="post-description">
                    {postDescription}
                </Card.Text>
                <Card.Text className="mt-3 text-muted">
                    <small>Posted on: {postCreatedAt}</small>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
