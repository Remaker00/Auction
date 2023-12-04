import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/log_model.jpg';
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            email: formData.email,
            password: formData.password,
        };
        console.log("Data IS:", dataToSend);

        axios.post('http://localhost:4000/user/checkUser', { formData })
            .then((response) => {
                alert('Successfully Logged In: ');

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', response.data.email);
                setFormData({
                    email: '',
                    password: '',
                    confirm_password: '',
                });
                window.location.href = '/zygler-arospace';
            })
            .catch((error) => {
                alert('Error Logging In: ');
            });
    }


    return (
        <div className='signup-container'>
            <div className='signup-model'>
                <img
                    src={Image} // Path relative to the public directory
                    alt="Model IMAGE"
                    width={750} // Set the width as per your design
                    height={540} // Set the height as per your design
                />
            </div>
            <div className='signup-layout'>
                <div className='signup-form'>
                    <h2>Login</h2>
                    <p>email: "nishant.sharma857966@gmail.com"
                        password: "waheguru"</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name='email'
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <button type="submit">Login</button>
                    </form>
                    <p>
                        Don't have an account?{' '}
                        <Link to="/signup-form">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default LoginForm;
