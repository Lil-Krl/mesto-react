import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupEditAvatar from './PopupEditAvatar'
import PopupEditProfile from "./PopupEditProfile"
import PopupAddCard from './PopupAddCard'
import ImagePopup from './ImagePopup'
import PopupWithForm from './PopupWithForm'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false) 
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false) 
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  function handleEditAvatarClick() { setIsEditAvatarPopupOpen(true) }

  function handleEditProfileClick() { setIsEditProfilePopupOpen(true) }

  function handleAddPlaceClick() { setIsAddPlacePopupOpen(true) }

  function handleCardDelete() { setIsDeleteOpen(true) }

  function handleCardClick(cardItem) {
    setIsImageOpen(true)
    setSelectedCard({
      ...selectedCard,
      name: cardItem.name,
      link: cardItem.link
    })
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImageOpen(false)
    setIsDeleteOpen(false)
  }

  return (
    <div className='root'>
      <div className="page">
        < Header />
        < Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete} />
        < Footer />
        < PopupEditAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} />
        < PopupEditProfile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} />
        < PopupAddCard
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} />
        < ImagePopup
          isOpen={isImageOpen}
          onClose={closeAllPopups}
          card={selectedCard} />
        < PopupWithForm
          isOpen={isDeleteOpen}
          onClose={closeAllPopups}
          id='delete-card'
          title='Вы уверены?'
          type='delete-card'
          buttonText='Да' />
      </div>
    </div>
  )
}

export default App