import React from 'react'

function PopupWithForm (props) {
  return (
    <div className={ `popup ${ props.isOpen ? 'popup__active' : '' }` } id={ props.id }>
      <div className="popup__container">
        <button type="button" className="popup__escape-button" onClick={ props.onClose } aria-label="Закрыть форму" />
        <h3 className="popup__name">{ props.title }</h3>
        <form className="popup__form" name={ props.type } noValidate>
          { props.children }
          <button type="submit" className="popup__submit" aria-label="Сохранить">{ props.buttonText || 'Сохранить' }</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm