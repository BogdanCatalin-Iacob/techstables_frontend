import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router'
import styles from './SignUpForm.module.css'
import ButtonSubmit from '../../../components/Button/ButtonSubmit'

const SingUpForm = () => {
    return (<>
        <Container className={`${styles.wrapper} text-center`}>
            <h1 className={styles.heading}>Sign Up</h1>
            <Form>
                {/* Email address input */}
                <Form.Group className={styles.formGroup} controlId="email">
                    <Form.Control className={styles.Input} type="email" name="email" placeholder="Email address" />
                    <Form.Label className={styles.formLabel}>Email address</Form.Label>
                </Form.Group>

                {/* Password input */}
                <Form.Group className={styles.formGroup} controlId="password">
                    <Form.Control className={styles.Input} type="password" name="password" placeholder="Password" />
                    <Form.Label className={styles.formLabel}>Password</Form.Label>
                </Form.Group>

                {/* Password confirmation input */}
                <Form.Group className="mb-3" controlId="confirm-password">
                    <Form.Control className={styles.Input} type="password" name="confirm_password" placeholder="Confirm password" />
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

export default SingUpForm