import React, { useEffect, useState } from "react"
import apiConnect from "../utils/Api"
import Card from "./Card"

function Main(props) {
  const [userAvatar, setUserAvatar] = useState("")
  const [userName, setUserName] = useState("")
  const [userDescription, setUserDescription] = useState("")
  const [cards, setCards] = useState([])
  useEffect(() => {
    Promise.all([apiConnect.getUserInfo(), apiConnect.getInitialCards()])
      .then(([userItem, initialCards]) => {
        setUserName(userItem.name)
        setUserDescription(userItem.about)
        setUserAvatar(userItem.avatar)
        setCards(initialCards)
      })
      .catch((err) => {
        console.log(`Возникла глобальная ошибка, ${err}`)
      })
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-place">
          <img
            src={userAvatar}
            className="profile__avatar-image"
            alt="Аватар профиля"
          />
          <button
            type="button"
            className="profile__avatar-edit"
            aria-label="Редактировать аватар профиля"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__information">
          <h1 className="profile__username">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          />
          <p className="profile__workplace">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить место"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="cards">
        {cards.map((cardItem) => (
          <Card
            key={cardItem._id}
            link={cardItem.link}
            name={cardItem.name}
            likeCount={cardItem.likes.length}
            onCardClick={props.onCardClick}
            onCardDelete={props.onCardDelete}
            card={cardItem}
          />
        ))}
      </section>
    </main>
  )
}

export default Main