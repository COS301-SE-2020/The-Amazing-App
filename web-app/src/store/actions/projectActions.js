import { beginApiCall, apiCallError } from "./apiStatus";
import firebase from "../../Config/fbConfig";

export const createProject = (project) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    const db = firebase.firestore().collection("projects");
    db.add({
      ...project,
      user_id: 123,
      createdAt: new Date(),
    }).then(() => {
      dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      window.location.href = "/dashboard";
    });
  } catch (err) {
    dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
  }
};
