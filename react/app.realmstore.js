import {createStore} from 'redux';

const initial = {
    realmSort:'name'
}

function realmReducer(prev,action){
    console.log("REDUCER",prev,action)
    if (!prev) return initial;
    if (action.type=='change_sort'){
        return Object.assign({},prev,{realmSort:action.data})
    }
    return prev;
}

export let realmStore=createStore(realmReducer);

export const RealmActions={
    dispatchChangeSort(sort){
        realmStore.dispatch({type:'change_sort', data:sort})
    }
}

