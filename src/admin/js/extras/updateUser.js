import $ from 'jquery';

const baseUrl = 'https://664d452eede9a2b55653126b.mockapi.io/api/school';

function updateUserInfo(user) {
    let url = `${baseUrl}/users/${user.id}`;
    console.log('Updating user...');
    $.ajax({
        type: 'PUT',
        url: url,
        data: {
            id: user.id,
            name: user.name,
            avatar: user.avatar
        }
    });
}

export default updateUserInfo;