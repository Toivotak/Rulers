import React from 'react'

import { RealmService } from '../app.realmservice'
import { Realmdetail, DetailContainer } from '../app.realmdetail'

const Realm = ({ id }) => {

    let realm = RealmService.get(id);
    return (
        <div>
            {realm}
        </div>
    )
}

export default Realm
