import $ from 'jquery';

const baseUrl = 'https://664d452eede9a2b55653126b.mockapi.io/api/school';


function allUsers () {
    let url = `${baseUrl.url}/users`;
    console.log('Grabbing all users...');
    return $.ajax(url, {
        success: (data) => {
            $('#result').html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.error('Error fetching users:', textStatus, errorThrown);
        }
    });
}

export default allUsers;