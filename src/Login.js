import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import database from './data/database.json'; // Import JSON directly

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Find a user matching the username and password
        const user = database.find(user => user.username === username && user.Password === password);

        if (user) {
            console.log("Login successful!");
            navigate('/landing');
        } else {
            setError('Invalid Login Details Provided.');
        }
    };

    return (
        <div className="login-form">
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Username"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required
                    />
                </div>
                <button type="submit">Log In</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
