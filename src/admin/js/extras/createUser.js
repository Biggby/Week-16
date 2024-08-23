import $ from 'jquery';

const baseUrl = 'https://664d452eede9a2b55653126b.mockapi.io/api/school';

function addUser(user) {
    console.log('Received user for creation:', user);


    let url = `${baseUrl}/users`;
    console.log('Adding a user...');
    $.ajax({
        type: 'POST',
        url: url,
        data: user,
        success: function(msg) {
            alert('User added: ' + JSON.stringify(msg));
        }
    });
}

export default addUser;