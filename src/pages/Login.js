import '../styles/Login.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    var isLoggedIn = localStorage.getItem("loggedIn")

    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault();

        if (form.username === 'foo' && form.password === 'bar') {
            localStorage.setItem('loggedIn', true)
            navigate("/home")
        } else {
            alert("Invalid credentials")
        }
    }

    useEffect(() => {

        if (isLoggedIn) {
            isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"))
            if (isLoggedIn) {
                navigate("/home")
            }
        }

    }, [isLoggedIn])

    return (

        <div className='login_main'>

            <Form className='form'>

                <h1 className="header">
                    Login
                </h1>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" onChange={(e) => {
                        setForm({ ...form, username: e.target.value })
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => {
                        setForm({ ...form, password: e.target.value })
                    }} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleLogin}>
                    Submit
                </Button>
                <br /><br />
                <Form.Text className="text-muted">
                    Guest: username: foo, password: bar
                </Form.Text>

            </Form>

        </div>

    );

}

export default Login;