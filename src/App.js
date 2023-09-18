import './App.css';
import React, { useState, useEffect } from "react";
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';

function App() {
  const [botlist, setBotlist] = useState([])
  const [botArmy, setBotArmy] = useState([])

  useEffect(() => {
    fetch('https://api.jsonserve.com/xS8ekS')
      .then(result => result.json())
      .then(data => setBotlist(data))
  }
    , []);

  function addBot(id) {
    const newBot = botlist.find(bot => bot.id === id)
    setBotArmy([...botArmy, newBot])
  }

  function removeBot(id) {
    const newBotArmy = botArmy.filter(bot => bot.id !== id)
    setBotArmy(newBotArmy)
  }

  async function deleteBot(id) {
    const newBotlist = botlist.filter(bot => bot.id !== id)
    const newBotArmy = botArmy.filter(bot => bot.id !== id)
    setBotlist(newBotlist)
    setBotArmy(newBotArmy)
    const response = await fetch(`https://api.jsonserve.com/xS8ekS/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <YourBotArmy botlist={botlist} botArmy={botArmy} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection botlist={botlist} botArmy={botArmy} addBot={addBot} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
