import React from 'react';
import { useState } from 'react'

import Button from './Button'
import Search from './Search'

const RightSide = () => {

    const [edit, setEdit] = useState(false);
    let text = "Edit";
    let mode = 0;

    if(edit) {
        console.log("edit");
        text = "Done";
        return(
            <div className="rightSide">
                <Search />
                <Button type="submit" onClick={() => setEdit(!edit)} text={text} />
                <Button type="submit" onClick={() => (mode = 2)} text={"Add Realm"} />
                <Button type="submit" onClick={() => (mode = 2)} text={"Add Ruler"} />
            </div>
        );
    }

    return(
        <div className="rightSide">
            <Search />
            <Button type="submit" onClick={() => setEdit(!edit)} text={text} />
        </div>
    );
}

export default RightSide;