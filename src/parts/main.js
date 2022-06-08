import React from 'react';
import Header from "./header";
import Card from "./Card";
import './m.scss';
import '../App.css';

function Main(props) {
    return (
        <div className='Main-sec'>
            <Header/>
            <Card/>
        </div>
    );
}

export default Main;