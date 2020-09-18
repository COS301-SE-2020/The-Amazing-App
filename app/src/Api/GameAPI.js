import React from 'react';
import firebase from '../Config/Config';

export const createGroup = (data) => {
    try {
        const db = firebase.firestore().collection('groups')
        db.add({...data,createdAt: new Date()});
        //On success
    }catch (error) {
        //On Fail
    }

}
export const registerGame =async (data, groupId) => {
    try {
         await firebase.firestore().collection('groups').doc(groupId).update({gameId:data.gameId,game:data.game});
        //On success
    }catch (error) {
        //On Fail
    }
    
}

