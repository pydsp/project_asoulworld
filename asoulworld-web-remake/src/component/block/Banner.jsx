import React, {Component} from "react";
import $ from 'jquery'
import {Container, Row} from "react-bootstrap";
import BannerCard from "../card/BannerCard";
import member from "../../config/member.json"
import {API_CHECK_LIVE} from "../../config/config";

const REQUEST_CYCLE=3
export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.refController = member.map(() => {
            return React.createRef()
        })
    }

    render() {
        return (
                <Container fluid className="pt20 pb10">
                    <Row>
                        {member.map((item, index) => {
                            return <BannerCard ref={this.refController[index]} key={index} info={item}/>
                        })}
                    </Row>
                </Container>
        )
    }

    componentDidMount() {
        this.requestLiveStatus()
        this.interval=setInterval(this.requestLiveStatus,REQUEST_CYCLE*60000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    requestLiveStatus=()=> {
        console.log("heartbeat send")
        $.ajaxSettings.async=true
        $.getJSON(API_CHECK_LIVE,  (data)=> {
            $.each(data, (index, json)=> {
                this.refController[index].current.setLiveStatus(json['status'])
            })
        })
    }

}