import React from "react";
import BotCollectionItem from "./BotCollectionItem";



function YourBotArmy({ removeBot, botArmy, deleteBot }) {
    return (
        <div className="BotCollection">
            <h3>Bot Collection</h3>
            <div className="row">
                {botArmy.map(bot => {
                    return (
                        <BotCollectionItem key={bot.id} bot={bot} removeBot={removeBot} deleteBot={deleteBot} />
                    )
                })}
            </div>
        </div>
    );
}

export default YourBotArmy;