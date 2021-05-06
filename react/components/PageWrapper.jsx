import React from 'react'
import { useState } from 'react'

import { editStore, EditActions } from '../app.editstore';

import Main from './Main'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const PageWrapper = ({logged}) => {
    
    const [edit, setEdit] = useState(1); //0 read, 1 add/edit country, 2 add/edit ruler
    const [loggedIn] = useState(logged);

    if(loggedIn) {
        () => setEdit(edit = 1); 
    }
    return(
        <div className="pageWrapper">
            <div>{edit}</div>
            <LeftSide />
            <Main mode={edit} />
            <RightSide />
        </div>
    )
}

export default PageWrapper;