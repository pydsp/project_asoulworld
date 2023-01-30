import React, {Component} from 'react';
export default class CalendarBanner extends Component {
    name_style = [
        {
            color: '#9ac8e2'
        },
        {
            color: '#db7d74'
        },
        {
            color: '#b8a6d9'
        },
        {
            color: '#e799b0'
        },
        {
            color: '#576690'
        },
        {
            color: '#fc966e'
        }
    ]

    constructor(props) {
        super(props);
        this.state = {};
        this.content = props.info
    }

    render() {
        return (
            <div className="calendar-card">
                <img src={this.getMemeImg()} className="calendar-card-logo" alt=""/>
                <h2 className="calendar-title">{this.props.pageTitle}</h2>
                {this.getContent()}
            </div>
        )
    }
    //获取随机挂件
    getMemeImg()
    {
        let rand_pool=["a.webp","b.webp","c.webp","d.webp","e.webp"]
        let rand_num=Math.floor(Math.random()*5)
        console.log(rand_num)
        return this.props.url+rand_pool[rand_num]
    }
    //获取日程表正文
    getContent() {
        if (Object.keys(this.content).length===0) {
            return(
                <p className="calendar-card-item">近期暂时没有直播安排哦~</p>
            )
        } else {
            return this.content.map((item, index) => {
                return (
                    <p key={index} className="calendar-card-item">{item.time} {item.type+this.getEpisode(item.episode)}在<span style={this.name_style[parseInt(item.live_member_id) - 1]}>{item.name}</span>直播间</p>
                )
            })
        }
    }
    getEpisode(num)
    {
        if(num>0)
        {
            return "第"+num+"期"
        }
        else
        {
            return ""
        }
    }
}