import React, {Component} from 'react';
import Header from "../component/block/Head";
import Banner from "../component/block/Banner";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../component/block/Sidebar";
import Navigate from "../component/block/Navigate";
import {COS_BASE_URL, COS_MAP} from "../config/config";
import website from "../config/website.json";
import creator from "../config/creator.json";
import tools from "../config/tools.json";
import Footer from "../component/block/Footer";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="main">
                <Header/>
                <main className="main-warp desktop-limit">
                    <Banner/>
                    <Container fluid className="pb20">
                        <Row>
                            <Col lg="3" md="4" sm="12" xs="12" className="plr10">
                                <Sidebar/>
                            </Col>
                            <Col lg="9" md="8" sm="12" xs="12" className="plr0">
                                <Navigate url={COS_BASE_URL+COS_MAP.navigator.website} pageTitle="网站" pageType={1} info={website}/>
                                <Navigate url={COS_BASE_URL+COS_MAP.navigator.creator} pageTitle="创作者" pageType={2} info={creator}/>
                                <Navigate url={COS_BASE_URL+COS_MAP.navigator.tools} pageTitle="工具" pageType={3} info={tools}/>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <Footer/>
            </div>
        )
    }
}