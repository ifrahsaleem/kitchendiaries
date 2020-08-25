import React, { Component } from 'react';
import Footer from '../components/footer';





class Contact extends Component{
    render(){
        return(
                    <React.Fragment>
                        <div className="container">
                            <div className="row mt-5">
                                <div className="info col-md-6 mt-4">
                                    <span className="contact-heading mb-1">Contact Info</span><br/>
                                    <span className="contact-text mb-1">Call us on (647)-529-4233 for placing order.</span><br/>
                                    <span className="contact-text mb-1">Located in Oakville, 6th line. </span>
                                    <span className="contact-text-bold mb-1"><strong>Please note complete address will be provided before pick-up. </strong></span>
                                    <span className="contact-text-bold mb-4"><strong>Delivery in GTA and Oakville available</strong></span><br/>
                                    <button type="button" class="btn btn-info mt-4 mr-3 col-6"><strong>Available Dates</strong></button>
                                </div>
                                <div className="contact-image col-md-5 offset-md-1 order-md-last order-first"><img src="assets/images/deliveryMan.svg"  className="img-fluid center" alt="delivery pic"/></div>
                            </div>
                        </div>
                    </React.Fragment>
                );
    }
}

export default Contact; 

