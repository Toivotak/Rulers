import React from 'react';
import {Route,Link} from 'react-router-dom';

import { RealmService } from './app.realmservice';
import { RulerService } from './app.rulerservice';

import Button from './components/Button'

export class Realmdetail extends React.Component{
    constructor(props){
        super(props);
        this.state={realmId:'new', realm:{id:'new', name:' '}, error:null};
    }

    componentDidMount(){
        RealmService.getAll().then(realm => {
            let realmId = this.props.match.params.id;
            if (realmId != "new")
                RealmService.get(realmId).then(realm => this.setState({realmId, realm}));
            else 
                this.setState({rulers});
        });
    }

    create() {
        console.log("Create");
        RealmService.create(this.state.realm);
    }

    realmChanged(ev){
        this.state.realm[ev.target.id] = ev.target.value;
        this.forceUpdate();
    }

    render(){
        let error=this.state.error;
        return <div>
            <h2>Realm {this.state.realm.id}</h2>
            {error && <p>{error.error}</p>}
            <div>
                <label>Name</label>
                <input id="name" onChange={ev => this.realmChanged(ev)} value={this.state.realm.name} />
                <Button type="submit" text="create" onClick={() => (this.create())}/>
            </div>
        </div>
    }
}
