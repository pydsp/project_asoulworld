import React, {Component} from 'react';
import parse from 'html-react-parser'

export default class TextBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="text-block">
                <p className="tag-title">{this.props.blockTitle}</p>
                {this.props.blockContent.map((item,index)=>{
                    return (
                        <p key={index} className={this.props.textSize==null?"text-normal":"text-small"}>{parse(item)}</p>
                    )
                })}
            </div>
        )
    }
}