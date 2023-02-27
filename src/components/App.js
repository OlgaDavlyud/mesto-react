import React from 'react';
import '../index.css';
import api from '../utils/Api.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import PopupWithConfirmation from './PopupWithConfirmation.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialUserData(currentUser)
    .then(data => {
      setCurrentUser(data);
  })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
    .then((dataCard) => {
        setCards(dataCard)
        });
    }, [])

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  function handleCardLike(card) {
    console.log(card);
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.setLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c.id === card._id ? newCard : c));
    });
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
  <div className="page">
    <Header />
    <Main
    cards={cards}
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
    onCardClick={setSelectedCard}
    onCardLike={handleCardLike}
    />
    <Footer />
    {/*Попап редактирования данных*/}
    <PopupWithForm
    title="Редактировать профиль"
    name="edit"
    buttonText="Сохранить"
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    >
        <label className="popup__form-field">
          <input
              className="popup__input popup__input-profile-name"
              type="text"
              name="name"
              id="profile-name"
              placeholder="Имя"
              defaultValue=""
              required=""
              minLength={2}
              maxLength={40}
          />
          <span className="popup__error-visible profile-name-error-visible " />
        </label>
        <label className="popup__form-field">
            <input
                className="popup__input popup__input-profile-about-yourself"
                type="text"
                name="about"
                id="profile-about-yourself"
                placeholder="Вид деятельности"
                defaultValue=""
                required=""
                minLength={2}
                maxLength={200}
            />
            <span className="popup__error-visible profile-about-yourself-error-visible" />
        </label>
    </PopupWithForm>
    {/*Попап добавления карточек*/}
    <PopupWithForm
    title="Новое место"
    name="add-card"
    buttonText="Создать"
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
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
    {/*Попап редактирования аватара*/}
    <PopupWithForm
    title="Обновить аватар"
    name="update-avatar"
    buttonText="Сохранить"
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
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
        />
        <span className="popup__error-visible avatar-error-visible" />
      </label>
    </PopupWithForm>
    {/*Попап подтверждения удаления карточки*/}
    <PopupWithConfirmation
    title="Вы уверены?"
    name="delete"
    buttonText="Да"
    />
    {/*Попап отображения большой карточки*/}
    <ImagePopup
    card={selectedCard}
    onClose={closeAllPopups}
    />
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;