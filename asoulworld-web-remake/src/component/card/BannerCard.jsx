import React from "react";
import moment from "moment";
import Card from "../basic/Card";
import {COS_MAP, COS_BASE_URL} from "../../config/config"
import {OverlayTrigger, Popover} from "react-bootstrap";

export default class BannerCard extends Card {
    info = this.props.info
    state = {live: 0}

    constructor(props) {
        super(props);
        this.liveDot = [{id: 0, name: "living-0"}, {id: 1, name: "living-1"}, {id: 2, name: "living-2"}, {
            id: 3,
            name: "living-3"
        }]
        this.liveDot.map((item) => {
            item.icon = "/img/icon/" + item.name + ".svg"
        })
    }

    cardSize = {lg: 4, md: 6, sm: 12, xs: 12}

    alertFactory(alertInfo) {
        let popover = (
            <Popover>
                <Popover.Header as="h3">{alertInfo.title}</Popover.Header>
                <Popover.Body>
                    <p className="alert-body-content">{alertInfo.content}</p>
                </Popover.Body>
            </Popover>
        )
        return (
            <OverlayTrigger placement="auto" overlay={popover}>
                <img className="alert-logo" src={this.getAlertLevel(alertInfo.level)} alt=""/>
            </OverlayTrigger>
        )
    }

    renderAlert() {
        if (this.info.hasOwnProperty("alert")) {
            return this.alertFactory(this.info.alert)
        }
    }

    getAlertLevel(level) {
        switch (level) {
            case 0:
                return "/img/icon/alert_white.svg"
            case 1:
                return "/img/icon/alert_yellow.svg"
            case 2:
                return "/img/icon/alert_red.svg"
        }
    }

    renderCardContent() {
        const member_bg = {
            backgroundImage: "url('" + COS_BASE_URL + COS_MAP.banner.background + this.info.background + "')"
        }
        return (
            <div className="banner-card-content">
                <div className="banner-background" style={member_bg}/>
                <div className="background-shadow"/>
                <div className="info-area">
                    <div className="relative-inline-block">
                        <img className={this.isBirthday() ? "birthday-logo" : "birthday-logo disable"}
                             title="该成员今天过生日哦~" src={"/img/icon/birthday.svg"} alt=""/>
                        <a href={"https://space.bilibili.com/" + this.info.bili_uid} target='_blank' rel="noreferrer">
                            <img className="logo-size round"
                                 src={COS_BASE_URL + COS_MAP.banner.avatar + this.info.avatar} alt=""/>
                        </a>
                    </div>
                    <div className="text-area">
                        <p className="name-text">{this.info.name}</p>
                        <p className="desc-content">{this.info.intro}</p>
                    </div>
                </div>
                <div className="member-status">
                    {this.renderAlert()}
                    <a href={"https://live.bilibili.com/" + this.info.live_uid} target="_blank" rel="noreferrer">
                        <div className="live-status-box" title={this.getLiveText()}>
                            <img src={this.getLiveDot()}
                                 className={parseInt(this.state.live) === 1 ? "live-dot living-anime" : "live-dot"}
                                 alt=""/>
                            <p className="live-text">LIVE</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

    componentDidMount() {
    }

    isBirthday() {
        let nowTime = moment().format("MM-DD")
        return nowTime === this.info.birthday
    }

    //更新动态
    setLiveStatus(num) {
        this.setState({live: num})
    }

    //获取直播高亮点配置
    getLiveDot() {
        const {live} = this.state
        return this.liveDot[live].icon
    }

    //获取直播提示文本
    getLiveText() {
        let highlight = "默认";
        switch (parseInt(this.state.live)) {
            default:
            case 0:
                highlight = "该成员直播间今天没有直播"
                break
            case 1:
                highlight = "该成员直播间正在直播！"
                break
            case 2:
                highlight = "该成员直播间今天有直播哦"
                break
            case 3:
                highlight = "直播间异常"
                break
        }
        return highlight
    }
}