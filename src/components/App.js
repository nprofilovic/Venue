import React, { Component } from 'react';
import  '../resources/styles.css';
import Header from './header_footer/Header';
import Featured from './featured';
import VenueInfo from './venueInfo';
import Highlights from './highlights';
import Pricing from './pricing';
import Location from './location';
import Footer from './header_footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
                <Header />
                <Featured />
                <VenueInfo />
                <Highlights />
                <Pricing />
                <Location />
                <Footer />
            </div>
        )
    }
}

export default App
