import React from 'react'
import { useState } from 'react'

import Main from './Main'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const PageWrapper = (props) => {
    const [edit, setEdit] = useState(1); //0 read, 1 add/edit country, 2 add/edit ruler

    return(
        <div className="pageWrapper">
            <LeftSide />
            <Main mode={edit} />
            <RightSide />
        </div>
    )
}

export default PageWrapper;