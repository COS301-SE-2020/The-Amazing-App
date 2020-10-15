import React, { useState} from 'react';
const StateContext = React.createContext();

const  StateProvider = (props) => {
  const [notArray, setnotArray] = useState('nnfdnffnefen');
 
  return (
    < StateContext.Provider
        value={{notArray,setnotArray}}
        >
        {props.children}
    </ StateContext.Provider>
  );
}
export {StateProvider,StateContext};