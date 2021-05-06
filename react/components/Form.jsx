import React, { useState } from 'react';
import PropTypes from 'prop-types'

import Button from './Button'

import { RealmService } from '../app.realmservice';
import { RulerService } from '../app.rulerservice';

const Form = ({type}) => {

    const [realm, setRealm] = useState([{name:"s"},{gov:""},{conti:""},{reli:""}]);
    
    const formSubmitted = (event) => {
        setRealm(realm.name = "asd")
        event.preventDefault();
        console.log("form send");
        RealmService.create(realm);
    }

    const onClick = () => {
        console.log("click form" ); 
    }

    if (type === "ruler"){
        return (
            <form className="form" onSubmit={formSubmitted}>
                <div className="form-collumn-1">
                    <label htmlFor="firstname">First name:</label><br />
                    <input type="text" id="firstname" name="firstname" className="form-input-text" /><br />
                    <label htmlFor="lastname">Last name:</label><br />
                    <input type="text" id="lastname" name="lastname" className="form-input-text" />
                </div>
                <div className="form-collumn-2">
                    <label>Sex:</label><br />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" id="female" name="gender" value="female" />
                </div>
                <div className="form-collumn-3">
                    <label htmlFor="birthday">Birthday:</label><br />
                    <input type="text" id="birthday" name="birthday" className="form-input-text" /><br />
                    <label htmlFor="deceased">Deceased:</label><br />
                    <input type="text" id="deceased" name="deceased" className="form-input-text" />
                </div>
                <div className="form-collumn-4">
                    <Button type="submit" color="green" text="Save" onClick={onClick} />
                    <Button type="reset" color="red" text="Cancel" onClick={onClick} />
                </div>
            </form> 
        )
    }
    if (type === "country"){
        return (
            <form className="form" onSubmit={formSubmitted}>
                <div className="form-collumn-1">
                    <label htmlFor="countryname">Counry name:</label><br />
                    <input type="text" id="countryname" name="countryname" className="form-input-text" /><br />
                    <label htmlFor="govtype">Goverment type:</label><br />
                    <input type="text" id="govtype" name="govtype" className="form-input-text" /><br />
                </div>
                <div className="form-collumn-2">
                    <label htmlFor="continent">Continent:</label><br />
                    <input type="text" id="continent" name="continent" className="form-input-text" /><br />
                    <label htmlFor="religion">Main Religion:</label><br />
                    <input type="text" id="religion" name="religion" className="form-input-text" /><br />
                </div>
                <div className="form-collumn-3">
                    
                </div>
                <div className="form-collumn-4">
                    <Button type="submit" color="green" text="Save" onClick={onClick} />
                    <Button type="reset" color="red" text="Cancel" onClick={onClick} />
                </div>
            </form> 
        )
    }
    return (
        <form>
            <label>Invalid form</label><br />
        </form> 
    )
}

Form.defaultProps = {
    type: "ruler"
}

export default Form;