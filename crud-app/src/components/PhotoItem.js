import React from "react";
import { Link } from 'react-router-dom'
// react-bootstrap
import { Card, Button, Col } from "react-bootstrap";
// services
import services from '../services';

const PhotoItem = ({ id, title, thumbnailUrl }) => {

    const deletePhoto = async () => {
        try {
            await services.deletePhoto(id);
            alert('Photo deleted');
            window.location.reload();
        }catch (err) {
            console.log(err);
            alert('Delete photo failed');
        }
    }

    return (
        <Col md="auto" style={{ marginTop: 16 }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={thumbnailUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Link to={`/edit/${id}`}>
                        <Button variant="primary">Edit</Button>
                    </Link>
                    <Button onClick={deletePhoto} variant="danger" style={{marginLeft: 16}}>Sil</Button>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhotoItem;