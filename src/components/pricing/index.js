import React, { Component } from 'react'
import MyButton from '../utils/MyButton'
import Zoom from 'react-reveal/Zoom'

class index extends Component {
    
    state = {
        prices: [100,150,250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin velit vel dolor malesuada faucibus.',
            'In varius turpis eu purus fringilla sodales. Vestibulum luctus rutrum mollis. Aenean vehicula faucibus bibendum.',
            'Nunc vel sagittis sem, at dignissim ligula. In tincidunt dignissim leo quis rhoncus. In ac luctus risus.'
        ],
        link:['http://rcnp.rs', 'http://google.com', 'http://barbos.rs'],
        delay:[500, 0, 500]
    }
    
    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item" key={i}>
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">{this.state.desc[i]}</div>  
                        <div className="pricing_buttons">
                            <MyButton 
                                    title="Purchase Tickets"
                                    bck="#ffa800"
                                    color="#ffffff"
                                    link={this.state.link[i]}
                                />
                        </div>

                    </div>
                </div>
            </Zoom>
            
        ))
        
       
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>


                </div>
            </div>
        )
    }
}

export default index
