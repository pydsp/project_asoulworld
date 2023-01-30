import React, {Component} from "react";
import $ from 'jquery'
import './App.scss';
import {Route,Routes,Navigate} from "react-router-dom";
import Main from "./page/Main";
import Page404 from "./page/Page404";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.loader = React.createRef()

    }

    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/404" element={<Page404/>}/>
                    <Route path="*" element={<Navigate replace to="/404"/>}/>
                </Routes>
            </div>
        )
    }
    //组件挂载完毕
    componentDidMount() {
        this.loadFinish()
    }
    //移除加载动画
    loadFinish() {
        $("#loader-div").delay(200).fadeOut("slow");
        $("#loader-img").fadeOut();
    }
}
