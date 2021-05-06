import {createStore} from 'redux';

const sortRealm = {
    realmSort:'name',
    
}


function realmReducer(prev,action){
    console.log("REDUCER", prev, action)
    if (!prev) return sortRealm;
    if (action.type == 'change_sort'){
        return Object.assign({}, prev, {realmSort:action.data})
    }
    return prev;
}

export let realmStore=createStore(realmReducer);

