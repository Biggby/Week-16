import $ from 'jquery';

const baseUrl = 'https://664d452eede9a2b55653126b.mockapi.io/api/school';

function getUser(userId) {
    let url = `${baseUrl}/users/${userId}`;
    console.log('Grabbing user data...');
    return $.ajax(url, {
        success: (data) => {
            $('#result').html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.error('Error fetching user data:', textStatus, errorThrown);
        }
    });
}

export default getUser;
