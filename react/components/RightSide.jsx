import React from 'react'
import { useState } from 'react'

import { loginStore } from '../app.loginstore'
import { editStore, EditActions } from '../app.editstore'

import Button from './Button'
import Search from './Search'

const RightSide = () => {

    const [edit, setEdit] = useState(false)
    const realmE = () => {
        EditActions.dispatchChangeEdit(1)
    }
    const rulerE = () => {
        EditActions.dispatchChangeEdit(2)
    }
    const editStatus = () => {
        EditActions.dispatchChangeEdit(0)
        setEdit(!edit)
    }

    if(loginStore.getState().loginStatus) {
        return(
        <div className="rightSide">
            <Search />
        </div>
        )
    }
    if(edit) {
        console.log("edit")
        return(
            <div className="rightSide">
                <Button type="submit" onClick={editStatus} text={"Done"} />
                <Button type="submit" onClick={realmE} text={"Add Realm"} />
                <Button type="submit" onClick={rulerE} text={"Add Ruler"} />
            </div>
        )
    }
    return(
        <div className="rightSide">
            <Button type="submit" onClick={() => setEdit(!edit)} text={"Edit"} />
        </div>
    )
}

export default RightSide