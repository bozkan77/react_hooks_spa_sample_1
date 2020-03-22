import React, {useState} from "react";
// react bootstrap
import { Form, Container, Row, Button } from "react-bootstrap";
// services
import services from "../services";
import {useHistory} from 'react-router-dom';

const AddScreen = () => {

    const history = useHistory();
    const [photoTitle, setPhotoTitle] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const handleSubmit = async () => {
        try {
            if(!photoTitle || !photoURL) {
                alert('İsim ve URL alanı boş bırakılamaz');
                return;
            }
            const photo = {
                photoTitle,
                photoURL
            };
            await services.addPhoto(photo);
            alert('Görsel ekleme tamamlandı!');
            history.replace('/');
        }catch(err){
            console.log(err)
        }
    };

    return (
        <Container>
            <Row>
                <Form style={{ width: "50%" }}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Görsel İsmi</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Fotoğraf ismi girin ..."
                             onChange={e => setPhotoTitle(e.target.value)}
                            value={photoTitle}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Görsel URL</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="http://example.com/photo.jpg"
                            onChange={e => setPhotoURL(e.target.value)}
                            value={photoURL}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button
                            variant="primary"
                            onClick={handleSubmit}
                        >
                            Ekle
                        </Button>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}

export default AddScreen;