import  React, {useState} from 'react';
import firebase from '../Config/Config';

export default ()=>{
    const [players, setPlayers] = useState([]);
    const getPlayers = async() => {
        try{
            const querySnapshot = await firebase.firestore().collection('Users').orderBy('Points','desc').limit(10).get();
            setPlayers(querySnapshot.docs);
        }
        catch(eror){
            console.log('Something went wrong')
        }
    }

    return [players, getPlayers];
};