import React, { useState} from 'react';
const AuthContext = React.createContext();

const  AuthProvider = (props) => {
  const [userId, setUserId] = useState('');
  const [isLogedin, setisLogedIn] = useState(false);
  const [isRegistered, setisRegistered] = useState(false);
  return (
    < AuthContext.Provider
        value={{userId,setUserId,isLogedin,setisLogedIn,isRegistered,setisRegistered}}
        >
        {props.children}
    </ AuthContext.Provider>
  );
}
export {AuthProvider,AuthContext};