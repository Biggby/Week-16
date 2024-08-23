import React, { useState } from 'react';
import './css/styles.css';
import removeUser from './js/extras/removeUser.js';

const DelUser = () => {
    const [userId, setUserId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page
        if (userId) {
            removeUser(userId);
        } else {
            console.error('User ID is not set');
        }
    };

    return (
            <div>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>User Management</title>
              {/* Bootstrap CSS */}
              <link
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                rel="stylesheet"
              />
              {/* Custom CSS */}
              <link href="css/styles.css" rel="stylesheet" />
              <div className="container">
                <h1 className="text-center">User Management</h1>
                <div id="userActions">
                  {/* Add User Form */}
                  <div id="removeUserForm" style={{ display: "none" }}>
                    <h4>Add User</h4>
                    {/* Add user form content here */}
                  </div>
                  {/* Remove User Form */}t
                  <div id="removeUserForm" onSubmit={handleSubmit}>
                    <h4>Remove User</h4>
                    <form id="removeUserFormContent">
                      <div className="form-group">
                        <label htmlFor="removeUserId">User ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="removeUserId"
                            required=""
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                      </div>
                      <button id="removeUserSubmit" className="btn btn-danger btn-block" type="submit">
                        Remove User
                      </button>
                    </form>
                  </div>
                  {/* Other forms */}
                </div>
                <div id="result" className="mt-4" />
                <a href="index.html" className="btn btn-primary mt-3">
                  Home
                </a>
              </div>
            </div>
    );
};

export default DelUser;