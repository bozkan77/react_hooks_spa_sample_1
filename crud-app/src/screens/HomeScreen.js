import React, { useEffect, useState } from "react";
// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";
// custom components
import PhotoItem from "../components/PhotoItem";
// data services
import services from "../services";
const HomeScreen = () => {

    const [ photos, setPhotos ] = useState(null);

    const fetchPhotos = async () => {
        try {
            const res = await services.getAllPhotos();
            console.log(res.data)
            setPhotos(res.data)
        } catch (err) {
            //alert ('Fotoğraflar yüklenirken hata oluştu')
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPhotos();
    }, []);

    if (!photos) {
        return (
            <Container>
                <Col>
                    <p>Fotoğraflar Yükleniyor ...</p>
                </Col>
            </Container>
        )
    }

    return (
        <Container>
            <Row>
                {photos.slice(0, 50).map(photo => (
                    <PhotoItem 
                        key={photo.id}
                        id={photo.id}
                        title={photo.title}
                        thumbnailUrl={photo.thumbnailUrl} 
                    />
                ))}
            </Row>
        </Container>
    )
}

export default HomeScreen;