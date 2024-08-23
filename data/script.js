import $ from 'jquery';

const baseUrl = 'https://664d452eede9a2b55653126b.mockapi.io/api/school';



function manageUsers() {
    return {
        url: `${baseUrl}`,  // Define the base URL or any necessary URL

        allUsers: function() {
            let url = `${this.url}/users`;
            console.log('Grabbing all users...');
            return $.ajax(url, {
                success: (data) => {
                    $('#result').html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.error('Error fetching users:', textStatus, errorThrown);
                }
            });
        },
        addUsers: function(user) {
            let url = `${this.url}/users`;
            console.log('Adding a user...');
            $.ajax({
                type: 'POST',
                url: url,
                data: user,
                success: function(msg) {
                    alert('User added: ' + JSON.stringify(msg));
                }
            });
        },
        removeUsers: function(userId) {
            let url = `${this.url}/users/${userId}`;
            console.log('Removing a user...');
            $.ajax({
                type: 'DELETE',
                url: url,
                success: function(msg) {
                    console.log('User removed:', msg);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Error removing user:', textStatus, errorThrown);
                }
            });
        },
        getUser: function(userId) {
            let url = `${this.url}/users/${userId}`;
            console.log('Grabbing user data...');
            return $.ajax(url, {
                success: (data) => {
                    $('#result').html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.error('Error fetching user data:', textStatus, errorThrown);
                }
            });
        },
        updateUserInfo: function(user) {
            let url = `${this.url}/users/${user.id}`;
            console.log('Updating user...');
            $.ajax({
                type: 'PUT',
                url: url,
                data: user
            });
        }
    };
}

export default manageUsers;