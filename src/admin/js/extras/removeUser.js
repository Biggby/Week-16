import $ from 'jquery';

const baseUrl = 'https://664d452eede9a2b55653126b.mockapi.io/api/school';

function removeUsers(userId) {
    let url = `${baseUrl}/users/${userId}`;
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
}

export default removeUsers;