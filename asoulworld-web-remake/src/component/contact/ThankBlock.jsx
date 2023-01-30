import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import MiniCard from "../card/MiniCard";
import thank_list from "../../config/thank_list.json"

export default class ThankBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="thank-block">
                <p className="thank-intro">{thank_list.intro}</p>
                <Container fluid className="thank-row-fix">
                    <Row>
                        {thank_list.content.map((item,index)=>{
                            if(item.visible===1)
                            {
                                return <MiniCard url={this.props.url} key={index} info={item}/>
                            }
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}