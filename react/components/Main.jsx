import React, { useState } from 'react';
import PropTypes from 'prop-types'

import { Realmlist } from '../app.realmlist';

import { Realmdetail, DetailContainer } from '../app.realmdetail';

import Para from './Para';
import Button from './Button';
import Form from './Form';
import Table from './Table';
import Header from './Header';

const Main = ({mode}) => {
    const [edit, setEdit] = useState(mode); //0 read, 1 add/edit country, 2 add/edit ruler 


    if(edit === 1) {
        return (
            <div className="main">
                <Form type="country"/>
                <Realmdetail />
            </div>
        )
    }
    if(edit === 2) {
        return (
            <div className="main">
                <Form type="ruler"/>
            </div>
        )
    }
    else { 
        return (
            <div className="main">
                <Header title="Welcome one and all" className="" hSize="h2"/>
                <Para />
                <Table />
                <Table type="countries" />
            </div>
        )
    }
}

Main.defaultProps = {
    mode: 999,
}

export default Main;