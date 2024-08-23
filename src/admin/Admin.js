import React from 'react';
import { useNavigate } from 'react-router-dom'
import './css/styles.css';
import allUsers from './js/extras/getAll';

const Admin = () => {
  
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="text-center">User Management</h1>
      <div id="userActions">
        <button id="allUsersBtn" className="btn btn-success btn-block">
          Get All Users
        </button>
        <div id="addUserForm" style={{ display: 'none' }}>
          <h4>Add User</h4>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="addUserNameDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select Name
            </button>
            <div className="dropdown-menu" aria-labelledby="addUserNameDropdown">
              <button className="dropdown-item" href="#" data-value="John Doe">
                John Doe
              </button>
              <button className="dropdown-item" href="#" data-value="Jane Smith">
                Jane Smith
              </button>
              {/* Add more dropdown items here */}
            </div>
            <input type="hidden" id="addUserName" />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="addUserAvatar">Avatar URL</label>
            <input
              type="text"
              className="form-control"
              id="addUserAvatar"
              required
            />
          </div>
          <button id="addUserSubmit" className="btn btn-success btn-block" type="submit">
            Add User
          </button>
        </div>
        <button onClick={() => navigate('/remove')} className="btn-block removeuser">
          Go to Remove Page
        </button>
        <button onClick={() => navigate('/addUser')} className="btn-block adduser">
          Go to Add Page
        </button>
        <button onClick={() => navigate('/getUser')} className="btn-block userinfo">
          Go to User Info Page
        </button>
        <button onClick={() => navigate('/updateUser')} className="btn-block update">
          Go to Update User Page
        </button>
      </div>
      <div id="result" className="mt-4">
        Results
      </div>
    </div>
  );
};

export default Admin;
 