import React from 'react'

import Header from './components/Header'
import PageWrapper from './components/PageWrapper'
import Footer from './components/Footer'

import {loginStore} from './app.loginstore'
import {editStore} from './app.editstore'

export class Main extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { logged: false, edit: 0, error: null }
    }

    componentDidMount() {
        let loggedIn = loginStore.getState().loginStatus
        let editMode = editStore.getState().editStatus
        console.log("app.main logged ", loggedIn)
        this.state.logged = loggedIn
        this.state.edit = editMode
        console.log("app.main state ", this.state)
        this.unsubscribeLoginStore = loginStore.subscribe(() => {
            console.log("Tila", loginStore.getState())
            this.setState({ logged: loginStore.getState().loginStatus })
        })
        this.unsubscribeEditStore = editStore.subscribe(() => {
            console.log("Tila", editStore.getState())
            this.setState({ edit: editStore.getState().editStatus })
        })
    }

    componentWillUnmount() {
        this.unsubscribeLoginStore()
        this.unsubscribeEditStore()
    }
    
    render() {
        return <div>
            <Header />
            <PageWrapper logged={this.state.logged} />
            <Footer />
        </div>
    }
}