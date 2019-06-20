import React, { Component } from 'react';
import  '../resources/styles.css';
import {Element} from 'react-scroll';
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
                
                <Element name="featured">
                    <Featured />
                </Element>    
                
                <Element name="venueInfo">
                    <VenueInfo />
                </Element>
                
                <Element name="hightlights">
                    <Highlights />
                </Element>
                
                <Element name="pricing">
                    <Pricing />
                </Element>

                <Element name="location">
                    <Location />
                </Element>
            
                <Footer />

            </div>
        )
    }
}

export default App
