import React from 'react';

function Card({name, link, likes, onCardClick}) {

    const handleCardClick = (data) => {
        onCardClick({ link, name });
    }

    return(
        <li className="element">
            <img className="element__image" src={`${link}`} alt={name} onClick={handleCardClick}/>
            <button className="element__trash-button" type="button"></button>
            <div className="element__card">
                <h2 className="element__title">{name}</h2>
                <div className="element__like">
                    <button className="element__like-button" type="button"></button>
                    <p className="element__like-counter">{likes}</p>
                </div>
            </div>
        </li>
    );
}

export default Card