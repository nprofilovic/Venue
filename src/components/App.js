import React, { Component } from 'react';
import  '../resources/styles.css';
import Header from './header_footer/Header';
import Featured from './featured';
import VenueInfo from './venueInfo';
import Highlights from './highlights';

class App extends Component {
    render() {
        return (
            <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
                <Header />
                <Featured />
                <VenueInfo />
                <Highlights />
            </div>
        )
    }
}

export default App
