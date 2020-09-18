import React, { useState} from 'react';
import source from '../../assets/t1.jpg';
const UserContext = React.createContext();

const UserProvider = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [points, setPoints] = useState(0);
  const [numGames, setNumGames] = useState(0);
  const [numGroups, setNumGroups] = useState(0);
  const [modalLoder, setModelLoder] = useState(false)
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModelOpen] = useState(false)
  return (
    <UserContext.Provider
        value={{email,setEmail,image,setImage, username, setUsername,userLocation,
          setUserLocation, points, setPoints,numGames,
          setNumGames, numGroups, setNumGroups,
          modalOpen,
          setModelOpen,
          modalLoder,
          setModelLoder,
          loading,
          setLoading
        }}
    >
        {props.children}
    </UserContext.Provider>
  );
}
export {UserProvider, UserContext};