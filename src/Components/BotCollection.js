import React from "react";
import BotCollectionItem from "./BotCollectionItem";

function BotCollection({ botlist, addBot, botArmy, deleteBot }) {
    return (
        <div className="BotCollection">
            <h3>Bot Collection</h3>
            <div className="row">
                {botlist.map(bot => {
                    if (!botArmy.includes(bot)) {
                        return (
                            <BotCollectionItem key={bot.id} bot={bot} addBot={addBot} deleteBot={deleteBot} />
                        )
                    }
                    else {
                        return null
                    }
                })}
            </div>
        </div>
    );
}

export default BotCollection;