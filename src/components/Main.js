import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike}) {
    const currentUser = React.useContext(CurrentUserContext);

    // const [cards, setCards] = React.useState([]);

    // React.useEffect(() => {
    //     api.getInitialCards()
    //     .then((dataCard) => {
    //         setCards(dataCard)
    //         //     data.map((item) => ({
    //         //         id: item._id,
    //         //         link: item.link,
    //         //         alt: item.name,
    //         //         likes: item.likes,
    //         //         name: item.name,
    //         //         owner: item.owner
    //         //         }))
    //         //     );
    //         });
    //     }, [])

    // function handleCardLike(card) {
    //     // Снова проверяем, есть ли уже лайк на этой карточке
    //     const isLiked = card.likes.some(i => i._id === currentUser._id);

    //     // Отправляем запрос в API и получаем обновлённые данные карточки
    //     api.setLike(card._id, !isLiked).then((newCard) => {
    //         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //     });
    // }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={`${currentUser.avatar}`} alt="Аватар профиля" />
                    <button
                    className="profile__avatar-button"
                    type="button"
                    onClick={onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button
                    className="profile__edit-button"
                    type="button"
                    onClick={onEditProfile}
                    />
                    </div>
                    <p className="profile__about-yourself">{currentUser.about}</p>
                </div>
                <button
                className="profile__add-button"
                type="button"
                onClick={onAddPlace}
                />
            </section>
            <section>
                <ul className="elements">
                    {
                        cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                            onCardLike={onCardLike}
                        />
                    ))}
                </ul>
            </section>
      </main>
    );
}

export default Main