import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../styles/ProfileCard.css';

function ProfileCard({ userName, email, registeredAt, dob, profilePictureUrl, bio }) {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '22rem', borderRadius: '15px' }} className="mb-3 shadow-lg">
                <Card.Header className="bg-teal text-white text-center rounded-top">
                    <h3>Profile</h3>
                </Card.Header>
                <Card.Body className="text-center">
                    <Card.Img
                        variant="top"
                        src={profilePictureUrl}
                        alt="Profile"
                        className="rounded-circle profile-picture"
                    />
                    <Card.Title className="card-title mt-3">{userName}</Card.Title>
                    <div className={"text-start"}>
                        <Card.Text className="text-muted">
                            <strong>Email:</strong> {email}
                        </Card.Text>
                        <Card.Text className="text-muted">
                            <strong>Date of Birth:</strong> {dob}
                        </Card.Text>
                        <Card.Text className="text-muted">
                            <strong>Registered on:</strong> {registeredAt}
                        </Card.Text>
                        <Card.Text>{bio}</Card.Text>
                    </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                    <Button className="profile-buttons rounded-4" variant="outline-teal">
                        Friends
                    </Button>
                    <Button className="profile-buttons rounded-4" variant="outline-teal">
                        Posts
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ProfileCard;
