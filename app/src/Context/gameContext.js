import React, { useState} from 'react';
const GameContext = React.createContext();

const GameProvider = (props) => {
  const [gameId, setGameId] = useState('');
  const [gameProperties, setProperties] = useState([]);
  const [gameCoord, setCoord] = useState([]);
  const [gameDesc, setGameDesc] = useState('');
  const [gameLocation, setGameLocation] = useState('');
  const [groups, setGroups]=useState([]);
  const [groupName,setGroupName]=useState('');

  return(
    <GameContext.Provider
        value={{gameId,setGameId,gameProperties,setProperties, gameCoord, setCoord,gameDesc,setGameDesc,gameLocation,setGameLocation,groups,setGroups,groupName,setGroupName}}
    >
        {props.children}
    </GameContext.Provider>
  );
}
export {GameProvider,GameContext};