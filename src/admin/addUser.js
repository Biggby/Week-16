import React, { useState } from 'react';
import './css/styles.css';
import addUser from './js/extras/createUser.js';

const CreateUser = () => {
    // State to store user input values
    const [userId, setUserId] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Call addUser with the userId and avatarUrl
        if (userId && avatarUrl) {
            const user = {
                id: userId,
                avatar: avatarUrl,
            };
            addUser(user);
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Add User</title>
            <link
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <div className="container">
                <h1 className="text-center">Add User</h1>
                <h3 className="text-center"> If above 34 User will be set to 35 and so on </h3>
                <form id="addUserForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="addUserId">User ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="addUserId"
                            placeholder="Enter User ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addUserAvatar">Avatar URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="addUserAvatar"
                            placeholder="Enter Avatar URL"
                            value={avatarUrl}
                            onChange={(e) => setAvatarUrl(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success btn-block">
                        Add User
                    </button>
                </form>
                <div id="result" className="mt-4" />
            </div>
        </div>
    );
};

export default CreateUser;
