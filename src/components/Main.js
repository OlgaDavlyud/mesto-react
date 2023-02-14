import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialUserData(userName,userDescription, userAvatar).then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
    }, [userName, userDescription, userAvatar])

    React.useEffect(() => {
        api.getInitialCards()
        .then((data) => {
            setCards(
                data.map((item) => ({
                    id: item._id,
                    link: item.link,
                    alt: item.name,
                    name: item.name,
                    likes: item.likes.length
                    }))
                );
            });
        }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={`${userAvatar}`} alt="Аватар профиля" />
                    <button
                    className="profile__avatar-button"
                    type="button"
                    onClick={onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                    <h1 className="profile__name">{userName}</h1>
                    <button
                    className="profile__edit-button"
                    type="button"
                    onClick={onEditProfile}
                    />
                    </div>
                    <p className="profile__about-yourself">{userDescription}</p>
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
                        cards.map(({ id, ...props }) => (
                        <Card
                        key={id} {...props}
                        onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
      </main>
    );
}

export default Main