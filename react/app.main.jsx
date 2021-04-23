import React from 'react';

import Header from './components/Header';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer'
import List from './components/List'

export class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <Header />
            <PageWrapper />
            <List />
            <Footer />
        </div>
    }
}