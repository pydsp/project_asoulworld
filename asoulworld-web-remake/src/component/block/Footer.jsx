import React, {Component} from "react";
import ContactDialog from "../contact/ContactDialog";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.dialog=React.createRef()
    }
    render() {
        return (
            <footer className="footer-section">
                <div>
                    <p>© 2022</p> <p className="foot-slogan">ASOULWORLD</p>&nbsp;<p className="contact-bt" onClick={this.openDialog}>更多信息</p>
                </div>
                <ContactDialog ref={this.dialog}/>
            </footer>
        )
    }
    openDialog=()=>{
        this.dialog.current.showDialog()
    }
}