import React, { useState } from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router';
import styles from './SignUpForm.module.css';
import ButtonSubmit from '../../../components/Button/ButtonSubmit';
import Alert from 'react-bootstrap/Alert';

const SingUpForm = () => {

    const [signUpData, setSignUpData] = useState({
        username: '',
        // email: '',
        password1: '',
        password2: ''
    });
    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData);
            navigate('/signin');
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (<>
        <Container className={`${styles.wrapper} text-center`}>
            <h1 className={styles.heading}>Sign Up</h1>
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

                {/* Email address input */}
                {/* <Form.Group className={styles.formGroup} controlId="email">
                    <Form.Control
                        className={styles.Input}
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email address" />
                    <Form.Label className={styles.formLabel}>Email address</Form.Label>
                </Form.Group> */}
                {/* email input errors */}
                {/* {errors.email?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>{message}</Alert>
                ))} */}

                {/* Password input */}
                <Form.Group className={styles.formGroup} controlId="password1">
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        name="password1"
                        value={password1}
                        onChange={handleChange}
                        placeholder="Password" />
                    <Form.Label className={styles.formLabel}>Password</Form.Label>
                </Form.Group>
                {/* password errors */}
                {errors.password1?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>{message}</Alert>
                ))}

                {/* Password confirmation input */}
                <Form.Group className="mb-3" controlId="confirm-password2">
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={handleChange}
                        placeholder="Confirm password" />
                    <Form.Label className={styles.formLabel}>Confirm password</Form.Label>
                </Form.Group>
                {/* password confirmation errors */}
                {errors.password2?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>{ message }</Alert>
                ))}

                {/* non field errors */}
                {errors.non_field_errors?.map((message, idx) => (
                    <Alert variant='warning' key={idx}>{ message }</Alert>
                ))}

                {/* submit button */}
                <Button className={`${styles.Button} ${styles.Wide} ${styles.Bright}`} type="submit">
                    Register
                </Button>
                
                <Link to="/signin" className='d-block mt-3'>Already have an account? <span>Sign in</span></Link>
            </Form>
        </Container>
    </>
    );
}

export default SingUpForm;