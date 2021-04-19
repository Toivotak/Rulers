import { useState } from 'react'
import Button from './Button'

const RightSide = () => {

    const [edit, setEdit] = useState(false);
    let text = "Edit";
    if(edit) {
        text = "Done";
    }
    return(
        <div className="rightSide">
            <Button type="submit" text={text} />
        </div>
    );
}

export default RightSide;