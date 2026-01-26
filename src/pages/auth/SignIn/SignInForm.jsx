import axios from 'axios';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link, useNavigate } from 'react-router';
import styles from './SignInForm.module.css';
import { useSetCurrentUser } from '../../../contexts/CurrentUserContext';

const SignInForm = () => {

    const setCurrentUser = useSetCurrentUser();

    const [singInData, setSignInData] = useState({
        username: "",
        password: ""
    });

    const {username, password} = singInData;

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        setSignInData({
            ...singInData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/login/", singInData);
            setCurrentUser(data.user);
            navigate('/')
        } catch (err) {
            setErrors(err.response?.data)
            console.log(err.response.data)
        }
    }

    return (
        <>
            <Container className={`${styles.wrapper} text-center`}>
                <h1 className={styles.heading}>Sign In</h1>
                <Form onSubmit={handleSubmit}>
                    {/* Name input */}
                    <Form.Group className={styles.formGroup} controlId="username">
                        <Form.Control
                            className={styles.Input}
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            placeholder="Name" />
                        <Form.Label className={styles.formLabel}>Name</Form.Label>
                    </Form.Group>
                    {/* username input errors */}
                    {errors.username?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}

                    {/* Password input */}
                    <Form.Group className={styles.formGroup} controlId="password">
                        <Form.Control
                            className={styles.Input}
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Password" />
                        <Form.Label className={styles.formLabel}>Password</Form.Label>
                    </Form.Group>
                    {/* password errors */}
                    {errors.password?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>{message}</Alert>
                    ))}

                    {/* non field errors */}
                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert variant='warning' key={idx}>{message}</Alert>
                    ))}

                    {/* submit button */}
                    <Button className={`${styles.Button} ${styles.Wide} ${styles.Bright}`} type="submit">
                        Login
                    </Button>

                    <Link to="/signup" className='d-block mt-3'>Don't have an account? <span>Sign up now!</span></Link>
                </Form>
            </Container>
        </>
    )
};

export default SignInForm;