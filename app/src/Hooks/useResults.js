import  React, {useState,useContext} from 'react';
import firebase from '../Config/Config';
import {AuthContext} from '../Context/AuthContext';
import {UserContext} from '../Context/UserContext';

export default ()=>{
    const [results,setResults] = useState([]);
    const [ games, setGames] = useState([]);
    const authContext = useContext(AuthContext);
    const userContext = useContext(UserContext);
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
    const homeGetGroups = async ()=>{
        await getGroups()
        userContext.setLoading(false)
        userContext.setModelOpen(true)
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

    return [results, getGroups, games, getGames,homeGetGroups];
};