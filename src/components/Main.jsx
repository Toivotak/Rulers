import React, { useState } from 'react';

import Para from './Para'
import Button from './Button';
import Form from './Form';
import Table from './Table';
import Header from './Header';

const Main = () => {
    const [edit, setEdit] = useState(0); //0 read, 1 add/edit country, 2 add/edit ruler 

    if(edit == 1) {
        return (
            <main className="main">
                <Form type="country"/>
            </main>
        )
    }
    if(edit == 2) {
        return (
            <main className="main">
                <Form type="ruler"/>
            </main>
        )
    }
    else { 
        return (
            <main className="main">
                <Header title="Welcome one and all" className="" hSize="h2"/>
                <Para />
                <Table />
                <Table type="countries" />
            </main>
        )
    }
}

export default Main;