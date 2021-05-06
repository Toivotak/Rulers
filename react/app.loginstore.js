import {createStore} from 'redux';

const loggedIn = {
    loginStatus: true
}

function loginReducer(prev, action){
    console.log("REDUCER", prev, action)
    if (!prev) return loggedIn;
    if (action.type == 'login'){
        return Object.assign({}, prev, {loginStatus:action.data})
    }
    return prev;
}

export let loginStore = createStore(loginReducer);

export const LoginActions = {
    dispatchChangeLogin(status){
        loginStore.dispatch({type:'login',data:status})
    }
}