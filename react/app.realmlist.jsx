import React from 'react';
import { RealmService } from './app.realmservice';

import {Link} from 'react-router-dom';

import {realmStore, RealmActions} from './app.realmstore';

const Realmrow = ({realm, selectRealm, deleteRealm}) => {
    return <tr>
        <td>{realm.id}</td>
        <td style={{cursor:'pointer'}} onClick={() => selectRealm(realm)}>{realm.id}</td>
        <td style={{cursor:'pointer'}} onClick={() => deleteRealm(realm)}>Del</td>
    </tr>
}

export class Realmlist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {realms:[], sortOrder:'name'};
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

    realmSelected(realm) {
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
        let rows = [];
        for (let i = 0; i < this.state.realms.length; i++) {
            rows.push(this.state.realms[i]); 
        }
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
                    {rows[0]}
                </tbody>
            </table>
        </div>
    }
}

/*
const Realmrow = ({realm, selectRealm, deleteRealm}) => {
    return <tr>
        <td>{realm.id}</td>
        <td style={{cursor:'pointer'}} onClick={() => selectRealm(realm)}>{realm.id}</td>
        <td style={{cursor:'pointer'}} onClick={() => deleteRealm(realm)}>Del</td>
    </tr>
}
let rows = filtered.map(b => <Realmrow deleteRealm={realm => this.deleteRealm(realm)} selectRealm={realm => this.realmSelected(realm)} realm={b} key={b.id} />);
*/