import React, {Component} from "react";
import {Modal, Button, Tabs, Tab} from "react-bootstrap";
import TextBlock from "./TextBlock"
import config from "../../config/config.json"
import ThankBlock from "./ThankBlock";
import {COS_BASE_URL, COS_MAP} from "../../config/config"
import QRCodeCard from "../card/QRCodeCard";


export default class ContactDialog extends Component {
    state={show:false}
    version=config["version"]
    render() {
        return (
            <Modal className="contact-dialog" show={this.state.show} onEscapeKeyDown={this.closeDialog} >
                <Modal.Header className="dialog-header" closeButton={false}>
                    <Modal.Title><h4>更多信息</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="notice" >
                        <Tab eventKey="notice" title="网站公告" tabClassName="tab">
                            <TextBlock blockTitle="公告" blockContent={config.web_notice}/>
                            <TextBlock blockTitle="更新" blockContent={config.update_info} textSize="small"/>
                        </Tab>
                        <Tab eventKey="basic_info" title="基本信息" tabClassName="tab">
                            <TextBlock blockTitle="简介" blockContent={config.intro}/>
                            <TextBlock blockTitle="收录标准" blockContent={config.regulation}/>
                            <TextBlock blockTitle="联系方式" blockContent={config.contact}/>
                        </Tab>
                        <Tab eventKey="thanks" title="特别感谢" tabClassName="tab">
                            <ThankBlock url={COS_BASE_URL+COS_MAP.footer.thank_list_icon}/>
                        </Tab>
                        <Tab eventKey="sponsor" title="赞助" tabClassName="tab">
                            <TextBlock blockTitle="赞助" blockContent={config.sponsor}/>
                            <QRCodeCard/>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <p className="version-tag">version {this.version}</p>
                    <Button variant="primary" onClick={this.closeDialog}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    showDialog=()=>
    {
        this.setState({show:true})
    }
    closeDialog=()=>
    {
        this.setState({show:false})
    }
}