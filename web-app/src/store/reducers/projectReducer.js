const initState = {
    projects : [
        {id: '1',title: 'help me',content: 'bal blah '},
        {id: '1',title: 'get me',content: 'bal blah '}, 
        {id: '1',title: 'set me',content: 'bal blah '}
    ]
}

const projectReducer = (state = initState,action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project',action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
        }
}

export default projectReducer; 