import './index.css';

function App() {
  return (
  <div className="page">
    <header className="header">
      <img
        className="header__logo"
        src="<%=require('./images/logo.png')%>"
        alt="Место Россия - логотип проекта"
      />
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="Аватар профиля" />
          <button className="profile__avatar-button" type="button" />
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__name" />
            <button className="profile__edit-button" type="button" />
          </div>
          <p className="profile__about-yourself" />
        </div>
        <button className="profile__add-button" type="button" />
      </section>
      <section>
        <ul className="elements" />
      </section>
    </main>
    <footer className="footer">
      <p className="footer__text">© 2020 Mesto Russia</p>
    </footer>
    {/*Попап редактирования данных*/}
    <div className="popup popup-edit">
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="reset"
          name="button-close"
        ></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form" name="popup-form-edit" noValidate="">
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
          <button
            className="popup__button-submit"
            type="submit"
            name="button-submit"
            value="Сохранить"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
    {/*Попап добавления карточек*/}
    <div className="popup popup-add">
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="reset"
          name="button-close"
        ></button>
        <h2 className="popup__title">Новое место</h2>
        <form className="popup__form" name="popup-form-add-card" noValidate="">
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
          <button
            className="popup__button-submit"
            type="submit"
            name="button-submit"
            value="Создать"
          >
            Создать
          </button>
        </form>
      </div>
    </div>
    {/*Попап отображения большой карточки*/}
    <div className="popup popup-show">
      <div className="popup__show-container">
        <button
          className="popup__button-close popup__show-button-close"
          type="reset"
          name="button-close"
        ></button>
        <img className="popup__show-image" />
        <p className="popup__show-name" />
      </div>
    </div>
    {/*Попап подтверждения удаления карточки*/}
    <div className="popup popup-delete">
      <div className="popup__delete-container">
        <button
          className="popup__button-close"
          type="reset"
          name="button-close"
        ></button>
        <h2 className="popup__title-delete">Вы уверены?</h2>
        <form className="popup-form" name="popup-form-delete-card" noValidate="">
          <button
            className="popup__button-submit"
            type="submit"
            name="button-submit"
            value="Да"
          >
            Да
          </button>
        </form>
      </div>
    </div>
    {/*Попап редактирования аватара*/}
    <div className="popup popup-update-avatar">
      <div className="popup__container-update-avatar">
        <button
          className="popup__button-close"
          type="reset"
          name="button-close"
        ></button>
        <h2 className="popup__title-update-avatar">Обновить аватар</h2>
        <form
          className="popup__form"
          name="popup-form-update-avatar"
          noValidate=""
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
          <button
            className="popup__button-submit"
            type="submit"
            name="button-submit"
            value="Сохранить"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
    {/*Разметка карточки*/}
    <template className="card-template" />
  </div>
  );
}

export default App;
