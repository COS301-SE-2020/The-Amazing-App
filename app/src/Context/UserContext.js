import React, { useState} from 'react';
import source from '../../assets/t1.jpg';
const UserContext = React.createContext();

const UserProvider = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  
  return (
    <UserContext.Provider
        value={{email,setEmail,image,setImage, username, setUsername}}
    >
        {props.children}
    </UserContext.Provider>
  );
}
export {UserProvider, UserContext};