import React from 'react';
import { RealmService } from './app.realmservice';

import {Link} from 'react-router-dom';

const Realmrow = ({realm, selectRealm, deleteRealm}) => {
    return <tr>
        <td><Link to = {`/realm/${realm.id}`}>{realm.id}</Link></td>
        <td style = {{cursor:'pointer'}} onClick={() => selectRealm(realm)}></td>
        <td style={{cursor:'pointer'}} onClick={() => deleteRealm(realm)}>Del</td>
    </tr>
}

export class Realmlist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {realms:[],titleFilter:'', authorFilter:'', sortOrder:'title'};
    }

    componentDidMount() {
        RealmService.getAll().then(realms => this.setState({realms}));
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
        let {titleFilter, authorFilter, sortOrder} = this.state;
        console.log(this.state.realms);
        let filtered = this.state.realms.filter(b => {
            if ((b.title) && (!b.title.includes(titleFilter))) return false;
            if ((b.author) && (!b.author.includes(authorFilter))) return false;
            return true;
        });
        filtered.sort((a,b) => a[sortOrder].localeCompare(b[sortOrder]));
        let rows = filtered.map(b => <Realmrow deleteRealm={realm => this.deleteRealm(realm)} selectRealm={realm => this.realmSelected(realm)} realm={b} key={b.id} />);
        return <div>
            <h2>Realms</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th><select id="sortOrder" onChange={ev => this.textChanged(ev)} value={this.state.sortOrder}>
                            <option value="title">{tx.realm.title}</option>
                            <option value="author">{tx.realm.author}</option>
                        </select></th>
                        <th><input id="titleFilter" onChange={ev => this.textChanged(ev)}  
                            value={titleFilter} placeholder={tx.realm.title} /></th>
                        <th><input id="authorFilter" onChange={ev => this.textChanged(ev)} 
                            value={authorFilter} placeholder={tx.realm.author} /></th>
                        <th>{tx.realm.price}</th>
                        <th>{tx.realm.published}</th>
                        <th><Link to='/realm/uusi'>Add</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    }
}