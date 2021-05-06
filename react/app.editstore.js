import {createStore} from 'redux';

const editMode = {
    editStatus: 0
}

function editReducer(prev, action){
    console.log("REDUCER", prev, action)
    if (!prev) return editMode;
    if (action.type == 'edit'){
        return Object.assign({}, prev, {editStatus: action.data})
    }
    return prev;
}

export let editStore = createStore(editReducer);

export const EditActions = {
    dispatchChangeEdit(edit){
        editStore.dispatch({type:'edit', data:edit})
    }
}