import React, { useState } from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router';
import styles from './SignUpForm.module.css';
import ButtonSubmit from '../../../components/Button/ButtonSubmit';

const SingUpForm = () => {

    const [signUpData, setSignUpData] = useState({
        email: '',
        password: '',
        confirm_password: ''
    });
    const { email, password, confirm_password } = signUpData;

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://techstables-2157aa5076c9.herokuapp.com/dj-rest-auth/registration', signUpData);
            navigate('/signin');
        } catch(err) {
            setErrors(err.response?.data)
        }
    };

    return (<>
        <Container className={`${styles.wrapper} text-center`}>
            <h1 className={styles.heading}>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                {/* Email address input */}
                <Form.Group className={styles.formGroup} controlId="email">
                    <Form.Control
                        className={styles.Input}
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email address" />
                    <Form.Label className={styles.formLabel}>Email address</Form.Label>
                </Form.Group>
                {errors.email?.map((message, idx) => {
                    <Alert variant="warning" key={idx}>{message}</Alert>
                })}

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

                {/* Password confirmation input */}
                <Form.Group className="mb-3" controlId="confirm-password">
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        name="confirm_password"
                        value={confirm_password}
                        onChange={handleChange}
                        placeholder="Confirm password" />
                    <Form.Label className={styles.formLabel}>Confirm password</Form.Label>
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                    Register
                </Button> */}
                <ButtonSubmit />
                <Link to="/signin" className='d-block mt-3'>Already have an account? <span>Sign in</span></Link>
            </Form>
        </Container>
    </>
    );
}

export default SingUpForm;