import React, { useState } from "react";
import Modal from "./Modal";

function BotCollectionItem({ bot, addBot, removeBot, deleteBot }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    };

    return (<div className="column">
        <div className="card">
            <img className="card-image" alt={bot.name} src={bot.avatar_url} onClick={() => (addBot ? addBot(bot.id) : removeBot(bot.id))} />
            <div className="card-content">
                <div className="card-header" onClick={() => (addBot ? addBot(bot.id) : removeBot(bot.id))}><p>{bot.name}</p></div>
                <button className="card-x-button" onClick={() => deleteBot(bot.id)}>X</button>
                <button onClick={toggleModal} className="card-button">View Bot</button>
            </div>
        </div>
        <Modal isOpen={isOpen} bot={bot} toggleModal={toggleModal} />
    </div>
    );
}

export default BotCollectionItem;