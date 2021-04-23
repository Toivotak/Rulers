import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'

import { RealmService } from '../app.realmservice';
import { RulerService } from '../app.rulerservice';

const List = ({wiew}) => {
    const [realms, setRealms] = useState();

    RealmService.getAll().then(realms => setRealms());

    if(wiew == "rulers") {
        return (
            <div>Rulers</div>
        )
    }
    return (
        <div>{realms}</div>
    )
}

export default List;