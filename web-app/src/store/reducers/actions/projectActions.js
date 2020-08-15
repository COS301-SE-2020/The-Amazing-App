export const createProject = (project) => {
    return (dispacth, getState) => {
// make async call to database
dispatch({type: 'CREATE_PROJECT', project }); 
    }
}