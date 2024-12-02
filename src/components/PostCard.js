import React from 'react';
import { Card } from "react-bootstrap";
import '../styles/PostCard.css';

export default function PostCard({ username, profileImageUrl, postImageUrl, postDescription, postCreatedAt}) {
    return (
        <Card style={{ width: '18rem' }} className="mb-3 shadow rounded-4">
            <Card.Header className="bg-teal text-white text-start">
                <div className="d-flex align-items-center">
                    <Card.Img
                        src={profileImageUrl}
                        alt="Profile"
                        className="rounded-circle profile-picture me-2"
                    />

                    {username}
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
