import React, {useState} from 'react';
import './css/styles.css';
import updateUserInfo from './js/extras/updateUser.js';



const UpdateUser = () => {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userImg, setUserImg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: userId,
            username: userName,
            avatar: userImg
        };
        updateUserInfo(user);
    };


    return (

        <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Update User</title>
  <link
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link href="css/styles.css" rel="stylesheet" />
  <div className="container">
    <h1 className="text-center">Update User</h1>
    <form id="updateUserForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="updateUserId">User ID</label>
        <input
              type="text"
              className="form-control"
              id="updateUserId"
              required
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
          />
      </div>
      <div className="form-group">
          <label htmlFor="updateUserName">Name</label>
          <input
              type="text"
              className="form-control"
              id="updateUserName"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
          />
      </div>
      <div className="form-group">
          <label htmlFor="updateUserAvatar">Avatar URL</label>
          <input
              type="text"
              className="form-control"
              id="updateUserAvatar"
              required
              value={userImg}
              onChange={(e) => setUserImg(e.target.value)}
          />
      </div>     
      <button id="updateUserSubmit" className="btn btn-warning btn-block" type="submit">
        Update User
      </button>
    </form>
    <div id="result" className="mt-4" />
  </div>
</div>
    );
};

export default UpdateUser;
