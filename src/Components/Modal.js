import React from 'react';

const Modal = ({ isOpen, bot, toggleModal }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h3>{bot.name}</h3>
                    <button className="close-button" onClick={toggleModal}>
                        &times;
                    </button>
                </div>
                <div className="modal-content">
                    <img className="modal-image" alt={bot.name} src={bot.avatar_url} />
                    <p>{bot.catchphrase}</p>
                    <p>Bot Class: {bot.bot_class}</p>
                    <div className="modal-ratings">
                        <p>Damage: {bot.damage}</p>
                        <p>Armor: {bot.armor}</p>
                        <p>Health: {bot.health}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;