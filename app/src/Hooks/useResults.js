import  React, {useState,useContext} from 'react';
import firebase from '../Config/Config';
import {AuthContext} from '../Context/AuthContext';

export default ()=>{
    const [results,setResults] = useState([]);
    const [ games, setGames] = useState([]);
    const authContext = useContext(AuthContext);

    const getGroups =async()=>{
        try{
            const query1 = await firebase.firestore().collection('groups').where("userId", '==', authContext.userId ).get();
            const query2 = await firebase.firestore().collection('groups').where("member", "array-contains", authContext.userId ).get();
            const groups = query1.docs.concat(query2.docs);
            setResults(groups);
        }
        catch(eror){
            console.log('Something went wrong')
        }
    } 

    const getGames =async()=>{
        try{
            const querySnapshot = await firebase.firestore().collection('projects').get();
            setGames(querySnapshot.docs);
        }
        catch(eror){
            console.log('Something went wrong')
        }
    } 

    return [results, getGroups, games, getGames];
};