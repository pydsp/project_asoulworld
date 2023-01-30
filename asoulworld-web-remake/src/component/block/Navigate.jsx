import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import NormalCard from "../card/NormalCard";


export default class Navigate extends Component {
    constructor(props) {
        super(props);
        this.content = props.info
    }

    render() {
        return (
            <Container fluid className="pt20">
                <h2 className="page-title">{this.props.pageTitle}</h2>
                <Row>
                    {this.content.map((item, index) => {
                        return <NormalCard url={this.props.url} cardType={this.props.pageType} key={index} info={item}/>
                    })}
                </Row>
            </Container>
        )
    }
}