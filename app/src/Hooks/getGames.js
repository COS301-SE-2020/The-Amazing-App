import  React, {useState} from 'react';
import firebase from '../Config/Config';

export default ()=>{
    const [results,setResults, games, setGames] = useState([]);

    const getGames =async()=>{
        try{
            const querySnapshot = await firebase.firestore().collection('projects').get();
            setResults(querySnapshot.docs);
        }
        catch(eror){
            console.log('Something went wrong')
        }
    } 


   
    return [results, getGroups, games, getGames];
};