import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "./PostCreateEditForm.module.css";
// import "../../App.css";
import btnStyles from "../../components/Button.module.css";
import Asset from "../../components/Asset/Asset";
import { Image } from "react-bootstrap";
import Card from "../../components/Card/Card";

function PostCreateForm() {
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image: ""
    });

    const { title, content, image } = postData;

    // handle text input change
    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        // clear the previous image
        URL.revokeObjectURL(image);

        // set a new image
        if (event.target.files.length) {
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            })
        }
    };

    // input text fields
    const textFields = (
        <div className="text-center">
            <form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        value={title}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        rows={6}
                        placeholder="Enter content"
                        value={content}
                        onChange={handleChange} />
                </Form.Group>
            </form>

            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => { }}
            >
                Cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                Create
            </Button>
        </div >
    );

    return (
        <Form>
            <Row className="gx-0">
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Card>
                        <Container
                            className="text-center d-flex flex-column justify-content-center"
                        >
                            <h2>Create Post</h2>
                            <Form.Group className="text-center">
                                {image ? (
                                    <>
                                        <figure>
                                            <Image className={`${styles.Image}`} src={image} rounded />
                                        </figure>
                                        <div>
                                            <Form.Label
                                                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                                htmlFor="image-upload"
                                            >
                                                Change Image
                                            </Form.Label>
                                        </div>
                                    </>
                                ) : (
                                    <Form.Label
                                        className="d-flex justify-content-center"
                                        htmlFor="image-upload"
                                    >
                                        <Asset src={Upload} message="Click or tap to upload an image" />
                                    </Form.Label>
                                )}

                                <Form.Control
                                    type="file"
                                    id="image-upload"
                                    accept="image/*"
                                    onChange={handleChangeImage}
                                    className="d-none" />
                            </Form.Group>
                            <div className="d-md-none">{textFields}</div>
                        </Container>
                    </Card>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className="Content">{textFields}</Container>
                </Col>
            </Row>
        </Form >
    );
}

export default PostCreateForm;