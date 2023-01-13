import apiFind from './apiFind'

class Api {
  constructor({ link, headers }) {
    this._link = link
    this._headers = headers
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`код ошибки: ${res.status}`)
    }
  }

  getUserInfo() {
    return fetch(`${this._link}users/me`, {
      headers: this._headers
    })
      .then(res => { return this._handleResponse(res) })
  }

  getInitialCards() {
    return fetch(`${this._link}cards`, {
      headers: this._headers

    })
      .then(res => { return this._handleResponse(res) })
  }

  setUserInfo(profileData) {
    return fetch(`${this._link}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name: profileData.username, about: profileData.description })
    })
      .then(res => { return this._handleResponse(res) })
  }

  addNewCard({ name, link }) {
    return fetch(`${this._link}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
      .then(res => { return this._handleResponse(res) })
  }

  deleteCard(cardId) {
    return fetch(`${this._link}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(res => { return this._handleResponse(res) })
  }

  changeAvatar(avatarLink) {
    return fetch(`${this._link}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatarLink.avatar })
    })
      .then(res => { return this._handleResponse(res) })
  }

  like(cardId) {
    return fetch(`${this._link}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(res => { return this._handleResponse(res) })
  }

  dislike(cardId) {
    return fetch(`${this._link}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(res => { return this._handleResponse(res) })
  }
}
const apiConnect = new Api(apiFind)

export default apiConnect