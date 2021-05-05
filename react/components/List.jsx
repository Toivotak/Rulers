import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
import Header from './Header' 

import { RealmService } from '../app.realmservice';
import { RulerService } from '../app.rulerservice';

const Realmrow = (realm) => {
    return <tr>
        <td>{realm}</td>
    </tr>
}


const List = ({type}) => {
    const [realms, setRealms] = useState([]);

    useEffect(() => {
        const getRealm = async () => {
          const tasksFromServer = await RealmService.getAll();
          setRealms(tasksFromServer)
        }
    
        getRealm()
      }, [])
    
    let s = RealmService.getAll();
    console.log(s);
    console.log(realms);
    let row = Realmrow(realms);
    console.log(row);
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