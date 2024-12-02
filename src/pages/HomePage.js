import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getData } from "../services/api-services";
import { format } from 'date-fns';  // Import date-fns
import '../styles/HomePage.css';
import PostCard from "../components/PostCard";

export default function HomePage() {
    const [posts, setPosts] = useState({});
    const [error, setError] = useState(null);
    const API_URL = "http://localhost:8080/posts";

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const data = await getData(API_URL);
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts: ", error);
            setError(error.message);
        }
    }

    return (
        <div className="main-content">
            <Container fluid>
                <Row className="g-4 justify-content-center px-lg-5">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Col
                                key={post.postId}
                                className="mb-4"
                            >
                                <PostCard
                                    username={post.userName}
                                    postImageUrl={post.postImageUrl}
                                    profileImageUrl={post.userImageUrl}
                                    postDescription={post.postDescription}
                                    postCreatedAt={format(new Date(post.createdAt), 'dd/MM/yyyy')}  // Format date with date-fns
                                />
                            </Col>
                        ))
                    ) : (
                        <p>No posts found</p>
                    )}
                </Row>
            </Container>
        </div>
    );
}
