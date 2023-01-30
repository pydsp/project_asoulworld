import React, {Component} from "react";
import config from "../../config/config.json"
import $ from "jquery";


export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const main_bg={
            backgroundImage: "url('"+config["header"]["header_bg"]+"')"
        }
        if(config["header"]["show_header"]===1)
        {
            return (
                <section className="intro-section">
                    <div className="intro-content" style={main_bg}>
                        <div className="background-shadow2 linear-grad">
                            <a href={config["header"]["slogan_href"]} target="_blank" rel="noreferrer">{config["header"]["slogan"]}</a>
                        </div>
                    </div>
                </section>
            )
        }
        else
        {
            return null
        }
    }
    //组件挂载完毕
    componentDidMount() {
        this.UIFix()
    }
    //修复UI显示适配问题
    UIFix() {
        let UA = navigator.userAgent
        if (UA.indexOf("iPhone") !== -1 || UA.indexOf("iphone") !== -1) {
            $("div.intro-content").css("background-attachment", "scroll")
        }
    }
}