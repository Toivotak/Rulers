import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
import Header from './Header' 

import { RealmService } from '../app.realmservice';
import { RulerService } from '../app.rulerservice';

const Realmrow = ({realm}) => {
    return <tr>
        <td>{realm}</td>
    </tr>
}

function a() {
    return RealmService.getAll().then()
}

const List = ({type}) => {
    const [realms, setRealms] = useState("France");

    
    let s = a();
    console.log(realms);
    let row = Realmrow(realms);

    if(type == "rulers") {
        return (
            <div>Rulers</div>
        )
    }
    if(type == "realms") {
        return (
            <div>
                <Header title="Realms List" hSize="h2" className=""/>
                <table>
                    <thead>
                        {row}
                    </thead>
                </table>
            </div>
        )
    }
}

List.defaultProps = {
    type: "realms"
}

export default List;