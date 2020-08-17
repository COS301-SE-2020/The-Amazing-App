/*export const createProject = (project) => {
    return (dispatch, getState, { getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            user_id : 123,
            createdAt: new Date()  
        }).then(()=> {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
       
    }
};*/
import { beginApiCall, apiCallError } from "./apiStatus";
import firebase from "../../Config/fbConfig";

export const createProject = (project) => async (dispatch) => {
    try {
      dispatch(beginApiCall());
      const db = firebase.firestore().collection("projects");
      db.add({
          ...project,
          user_id: 123,
          createdAt: new Date() 
      }).then(()=>{
          dispatch({type: 'CREATE_PROJECT_SUCCESS'
      })
      })
    }catch(err){
        dispatch({type: 'CREATE_PROJECT_ERROR'}, err)
    }
}