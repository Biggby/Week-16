import React, { useState } from 'react';
import './css/styles.css';
import getUser from './js/extras/getUser.js';

const GrabUser = () => {
    const [userId, setUserId] = useState('');

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Get User</title>
            <link
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link href="css/styles.css" rel="stylesheet" />
            <div className="container">
                <h1 className="text-center">Get User</h1>
                <form id="getUserForm" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="getUserId">User ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="getUserId"
                            placeholder="Enter User ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        id="getUserSubmit"
                        className="btn btn-info btn-block"
                        onClick={() => userId && getUser(userId)}
                    >
                        Get User
                    </button>
                </form>
                <div id="result" className="mt-4" />
            </div>
        </div>
    );
};

export default GrabUser;
