import React, {useEffect, useState} from 'react';
import {getData} from "../services/api-services";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import PostCard from "../components/PostCard";
import {format} from "date-fns";
import ProfileCard from "../components/ProfileCard";

export default function FriendsPage() {
    const {userId} = useParams();
    const [friendships, setFriendships] = useState([]);
    const [error, setError] = useState(null);
    const API_URL = `http://localhost:8080/friendships/${userId}`;

    useEffect(() => {
        fetchFriendships();
    }, []);

    const fetchFriendships = async () => {
        try {
            const data = await getData(API_URL);
            setFriendships(data);
        } catch (error) {
            console.error("Error fetching friendships: ", error);
            setError(error.message);
        }
    }

    return (
        <div className="main-content">
            <Container fluid>
                <Row className="g-4 justify-content-center px-lg-5">
                    {friendships.length > 0 ? (
                        friendships.map((friendship) => (
                            <Col
                                key={friendship.friendshipId}
                                className="mb-4"
                            >
                                <ProfileCard
                                    userId={userId}
                                    username={(friendship.sourceUserName === userId) ? friendship.sourceUserName : friendship.targetUserName}

                                    // status={friendship.status}
                                    // createdAt={format(new Date(friendship.createdAt), 'dd/MM/yyyy')}
                                />
                            </Col>
                        ))
                    ) : (
                        <p>No friendships found {friendships.length}</p>
                    )}
                </Row>
            </Container>
        </div>
    )
}