export default class Api {
    constructor(options) {
        this.options = options;
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
                headers: this.headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Упс, что-то пошло не так... ${res.status}`);
            })
            .catch(error => alert(error));
    }

    sendUserInfo(profileName, about) {
        return fetch(`${this.baseUrl}/users/me`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({
                    name: profileName.value,
                    about: about.value
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Упс, что-то пошло не так... ${res.status}`);
            })
            .catch(error => alert(error));
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
                method: 'GET',
                headers: this.headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Упс, что-то пошло не так... ${res.status}`);
            })
            .catch(error => alert(error));
    }
}