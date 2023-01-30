import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import NoticeBanner from "../card/NoticeBanner";
import $ from "jquery";
import {API_GET_NOTICE, COS_BASE_URL, COS_MAP,API_GET_RECENT_LIVE} from "../../config/config";
import CalendarBanner from "../card/CalendarBanner";

export default class Sidebar extends Component {
    notice_content=null
    recent_live=null
    constructor(props) {
        super(props);
        this.state = {};
        this.requestNotice()
    }

    render() {
        return (
            <Row>
                <Col lg="12" md="12" sm="6" xs="12">
                    <NoticeBanner url={COS_BASE_URL+COS_MAP.notice} pageTitle="公告" info={this.notice_content}/>
                </Col>
                <Col lg="12" md="12" sm="6" xs="12">
                    <CalendarBanner url={COS_BASE_URL+COS_MAP.calendar_meme_img} pageTitle="近期日程表" info={this.recent_live} />
                </Col>
            </Row>
        )
    }
    componentDidMount() {

    }

    //请求notice内容
    requestNotice()
    {
        $.ajaxSettings.async=false
        $.post(API_GET_NOTICE,JSON.stringify({notice_type:0}),(response,status)=> {
            this.notice_content=response
        })
        $.post(API_GET_RECENT_LIVE,(response,status)=> {
            this.recent_live=response
        })
    }
}