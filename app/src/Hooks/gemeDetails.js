import  React, {useState,useContext} from 'react';
import firebase from '../Config/Config';
import {GameContext} from '../Context/GameContext';
import useCoords from './useCoords';
export default ()=>{
    const gameContext = useContext(GameContext);
    const [latitude, longitude, getCoordinates] = useCoords();
    const propAray = [];
    const coordArray = [];
    const setGameState =async()=>{
        try{
            const querySnapshot =await firebase.firestore().collection('projects').doc('0njZnBZUwuckUToe33XC').get();
            querySnapshot.data().properties.forEach( async (element)=> {
                propAray.push(element);
                getCoordinates('Gautrain Hatfield Station, Cnr Grosvenor Road and Arcadia Street, Hatfield, Pretoria, Gauteng 0083, South Africa')
                const data = {'latitude':latitude , 'longitude':longitude}
                coordArray.push(data)
                //console.log(element.location)
                //coordArray.push(element.location)
            });
           //gameContext.setProperties(propAray);
           //gameContext.setCoord(coordArray);
            console.log( coordArray)
         
        }
        catch(eror){
            console.log(eror)
        }
    }  

    return [setGameState];
};