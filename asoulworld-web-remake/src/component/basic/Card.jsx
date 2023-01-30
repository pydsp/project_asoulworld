import React, {Component} from 'react';
import {Col} from "react-bootstrap";

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    //use cardSize control card
    cardSize = {lg: 4, md: 6, sm: 12, xs: 12}
    cardBorderRadius = 10
    cardBackgroundColor='#ffffff'
    cardBoxShadow='0 0 30px #40404018'

    //Don't override render function
    render() {
        let card_style = {
            borderRadius: this.cardBorderRadius + 'px',
            backgroundColor:this.cardBackgroundColor,
            boxShadow:this.cardBoxShadow
        }
        return (
            <Col {...this.cardSize}>
                <div className="card-item" style={card_style}>
                    {this.renderCardContent()}
                </div>
            </Col>
        )
    }

    //Override this
    renderCardContent() {
        return (
            <></>
        )
    }
}