import Card from "../basic/Card";

export default class NormalCard extends Card {
    typeSelector = {
        0: "empty.png",
        1: "fanmade.svg",
        2: "bilibili.ico",
        3: "wyy.ico",
        4: "youtube.ico",
        5: "vscode.ico",
        6: "vuejs.svg"
    }
    cardSize = {lg: 2, md: 3, sm: 4, xs: 6}

    renderCardContent() {
        const {info} = this.props
        return (
            <a className="normal-card-content" href={info.link} target='_blank' rel="noreferrer">
                <div className="serv-icon">
                    <img className={this.isRoundAvatar() ? "normal-logo-size round" : "normal-logo-size"}
                         src={this.props.url + info.icon} alt=""/>
                    <img className="type-logo" src={"/img/logo/" + this.typeSelector[info.type]} alt=""/>
                    <p className="normal-card-title mt10">{info.name}</p>
                </div>
                <div className="serv-content">
                    <p className='desc-content'>{info.desc}</p>
                </div>
                <img className={info.error === 1 ? "status-logo alert-anime" : "disable"}
                     src={"/img/icon/warning.svg"} alt="" title="该网站出现故障暂时无法访问"/>
            </a>
        )
    }

    isRoundAvatar() {
        return this.props.cardType === 2
    }
}