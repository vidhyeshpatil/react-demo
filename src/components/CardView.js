import React from 'react';

export default class CardView extends React.Component {
    render() {
        return (
            <div className = "card-view-container">
                <div className = "card-view-header">
                    <img className = "card-image" src = {"assets/images/4.jpeg"} alt = "image" />
                    <div className = "card-info">
                        <p className = "title"> Excess Baggage Discount </p>
                        <p className = "caption">Valid till 23rd Nov 2020</p>
                    </div>
                </div>
                <div className = "card-details">INR 750 off on Excess Baggage on Domestic Flights</div>
                <div className = "card-info-link">How to utilise</div>
                <button className = "card-select-btn">Select</button>
            </div>
        );
    }
}