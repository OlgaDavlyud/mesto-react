import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace}) {

    function handleSubmit(evt) {
        evt.preventDefault();

        onAddPlace(console.log("onAddPlace"))
    }

    return(
        <PopupWithForm
        title="Новое место"
        name="add-card"
        buttonText="Создать"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        >
          <label className="popup__form-field">
            <input
              className="popup__input popup__input-name-card"
              type="text"
              name="name"
              id="name-card"
              placeholder="Название"
              defaultValue=""
              required=""
              minLength={1}
              maxLength={30}
            />
            <span className="popup__error-visible name-card-error-visible" />
          </label>
          <label className="popup__form-field">
              <input
                className="popup__input popup__input-link-image"
                type="url"
                name="link"
                id="link-image"
                placeholder="Ссылка на картинку"
                defaultValue=""
                required=""
              />
              <span className="popup__error-visible link-image-error-visible" />
          </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;