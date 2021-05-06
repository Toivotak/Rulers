import React from 'react';
import { RealmService } from './app.realmservice';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import {realmStore} from './app.realmstore';
import Button from './components/Button'

const Realmrow = ({realm, deleteRealm}) => {
    return <tr><Router>
        <td><Link to={`/realms/${realm.id}`}>{realm.name}</Link></td>
        <td><Button text="Edit" onClick={() => editRealm(realm)}/></td>
        <td><Button text="Delete" onClick={() => deleteRealm(realm)}/></td>
    </Router></tr>
}

export class Realmlist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {realms:[], nameFilter:'',sortOrder:'name'};
    }

    componentDidMount() {
        let sortOrder = realmStore.getState().realmSort;
        RealmService.getAll().then(realms => this.setState({realms, sortOrder}));
        console.log("mounted")
        this.unsubscribe = realmStore.subscribe(() => {
            console.log("Tila", realmStore.getState())
            this.setState({sortOrder:realmStore.getState().realmSort})
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    editRealm(realm) {
        this.props.history.push(`/realm/${realm.id}`)
    }

    textChanged(ev){
        this.setState({[ev.target.id]:ev.target.value});
    }

    deleteRealm(realm){
        RealmService.deleteRealm(realm.id).then(() => this.forceUpdate());
    }

    render(){
        let {nameFilter, sortOrder} = this.state;
        console.log("__state__", this.state.realms)
        let filtered = this.state.realms.filter(b => {
            if ((b.name) && (!b.name.includes(nameFilter))) return false;
            return true;
        });
        filtered.sort((a,b) => a[sortOrder].localeCompare(b[sortOrder]));
        console.log("filtered", filtered);
        let rows = filtered.map(r => <Realmrow deleteRealm = {realm => this.deleteRealm(realm)} realm = {r} key = {r.id} />);

        console.log("rows", rows);
        return <div>
            
            <h2>Realms</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    }
}
