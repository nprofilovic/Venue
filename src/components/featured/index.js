import React from 'react';
import { relative } from 'path';
import Carousel from './Carousel';
const Featured = () => {
    return (
        <div style={{position: relative}}>
            
            <Carousel />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
        </div>
    );
};

export default Featured;