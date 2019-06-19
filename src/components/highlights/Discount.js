import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper" > 
                     <Fade
                        onReveal={() => this.porcentage()}
                     >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                     </Fade>
                     
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase ticket before 20th JUNE</h3>
                            <p>Sed in euismod libero. Sed metus nulla, scelerisque vitae placerat sit amet, bibendum et purus. Maecenas congue, tortor quis pharetra faucibus, neque lacus placerat lorem, eget pellentesque dolor eros eu ipsum. Vestibulum quis nisi scelerisque, dignissim est at, gravida dui. </p>
                            <div>
                                <MyButton 
                                    title="Purchase Tickets"
                                    bck="#ffa800"
                                    color="#ffffff"
                                    link="http://google.com"
                                />
                            </div>
                        </div>
                    </Slide>
                 </div>
            </div>
        )
    }
}

export default Discount
