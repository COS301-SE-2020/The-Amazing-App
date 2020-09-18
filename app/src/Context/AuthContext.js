import React, { useState} from 'react';
const AuthContext = React.createContext();

const  AuthProvider = (props) => {
  const [userId, setUserId] = useState('');
  const [isLoggedin, setisLoggedIn] = useState(false);
  const [isRegistered, setisRegistered] = useState(false);
  return (
    < AuthContext.Provider
        value={{userId,setUserId,isLoggedin,setisLoggedIn,isRegistered,setisRegistered}}
        >
        {props.children}
    </ AuthContext.Provider>
  );
}
export {AuthProvider,AuthContext};