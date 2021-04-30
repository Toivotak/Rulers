import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
import Header from './Header' 

import { RealmService } from '../app.realmservice';
import { RulerService } from '../app.rulerservice';

const List = ({type}) => {
    //const [realms, setRealms] = useState();

    let realms = RealmService.getAll();

    if(type == "rulers") {
        return (
            <div>Rulers</div>
        )
    }
    if(type == "realms") {
        return (
            <div>
                <Header title="Realms" hSize="h2" className=""/>
            </div>
        )
    }
}

List.defaultProps = {
    type: "realms"
}

export default List;