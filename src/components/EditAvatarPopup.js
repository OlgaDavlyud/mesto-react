import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { useRef } from "react";


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInput = useRef();

  React.useEffect(() => {
      avatarInput.current.value = "";
  }, []);

  function handleSubmit(evt) {
      evt.preventDefault();

      onUpdateAvatar({
        avatar: avatarInput.current.value
      });
  }

  return (
      <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      >
        <label className="popup__form-field">
          <input
            className="popup__input popup__input-update-avatar"
            type="url"
            name="avatar"
            id="avatar"
            placeholder="Ссылка на аватар"
            defaultValue=""
            required=""
            ref={avatarInput}
          />
          <span className="popup__error-visible avatar-error-visible" />
        </label>
      </PopupWithForm>
    );
}

export default EditAvatarPopup;