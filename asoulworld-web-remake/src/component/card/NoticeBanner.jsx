import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";

export default class NoticeBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.content = props.info
        this.bannerLoop=3000
    }

    render() {
        return (
            <div className="pt20">
                <h2 className="page-title">{this.props.pageTitle}</h2>
                <Carousel className="notice-banner-main">
                    {this.content.map((item,index)=>{
                        return (
                            <Carousel.Item key={index} interval={this.bannerLoop}>
                                <a href={item.link} target="_blank" title={item.title} rel="noreferrer">
                                    <img
                                        className="notice-banner-img"
                                        src={this.props.url+item.img}
                                        alt={item.descrip}
                                    />
                                </a>
                                <div className="notice-banner-block" >
                                    <p className="notice-banner-block-text">{item.descrip}</p>
                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}