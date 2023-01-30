import React, {Component} from 'react';
import Card from "../basic/Card";

export default class MiniCard extends Card {
    constructor(props) {
        super(props);
        this.state = {};
    }
    cardBorderRadius=20
    cardSize = {lg: 4, md: 4, sm: 6, xs: 6}
    cardBoxShadow="0 3px 8px #40404020"
    renderCardContent() {
        //TO-DO
        const {info} = this.props
        return (
            <a className="mini-card" href={info.link} target='_blank'>
                <img className="mini-avatar" alt="" src={this.props.url+info.icon}/>
                <p>{info.name}</p>
            </a>
        )
    }
}