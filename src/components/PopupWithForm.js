import React from 'react';


function PopupWithForm({title, name, children, buttonText, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className={`popup__container popup__container__type_${name}`}>
                <button
                    className="popup__button-close"
                    type="reset"
                    name="button-close"
                    onClick={onClose}
                ></button>
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" name={`popup-form-${name}`}>
                    {children}
                    <button
                    className="popup__button-submit"
                    type="submit"
                    name="button-submit"
                    value={buttonText}
                    >
                    {buttonText}
                    </button>
                </form>
            </div>
      </div>
    );
}

export default PopupWithForm