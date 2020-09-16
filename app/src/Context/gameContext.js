import React, { useState} from 'react';
const GameContext = React.createContext();

const GameProvider = (props) => {
  const [gameId, setGameId] = useState('');
  const [gameProperties, setProperties] = useState([]);
  const [gameCoord, setCoord] = useState([]);

  return(
    <GameContext.Provider
        value={{gameId,setGameId,gameProperties,setProperties, gameCoord, setCoord}}
    >
        {props.children}
    </GameContext.Provider>
  );
}
export {GameProvider,GameContext};