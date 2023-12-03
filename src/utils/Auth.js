class Auth {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  register(name, email, password) {
    return this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  }

  login(email, password) {
    return this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  }

  checkToken(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const auth = new Auth({
  // baseUrl: "http://localhost:3000",
  // baseUrl: 'https://api.moviesexplorer.jezeld.nomoreparties.co',
  baseUrl: 'https://api.jezel.ru',
});

export default auth;
