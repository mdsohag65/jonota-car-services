import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.email.value);
        console.log(event.target.password.value);
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-3'>Please Register!!</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>New to Jonota Car? <Link to="/login" style={{ cursor: 'pointer', textDecoration: 'none' }} ><span className='text-danger' >Please Login!!</span></Link> </p>
        </div>
    );
};

export default Register;