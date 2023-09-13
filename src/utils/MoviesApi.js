class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      }
    }

    _request(url, options) {
      return fetch(url, options).then(this._checkResponse);
    }

    getInitialCards() {
      return this._request(`${this._baseUrl}/beatfilm-movies`, {
        headers: this._headers,
      });
    }
  }

  const api = new Api({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export default api;