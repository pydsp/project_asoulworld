import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Page404 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="page-404">
                <div className="block">
                    <img src="https://asoulworld-1251124742.cos.ap-shanghai.myqcloud.com/icon/404.gif" alt=""/><p>404</p>
                </div>
                <div className="return-button">
                    <Link to="/">返回主站</Link>
                </div>
            </div>
        )
    }
}