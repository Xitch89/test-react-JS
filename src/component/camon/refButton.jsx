import React, { Component } from "react";


class RefButton extends Component {
    constructor(props){
        super(props);
        this.props = {
            linkText: '',
            classLink: ''
        }
    }
    render() {
        const {linkText, classLink} = this.props;
        return(
            <a className={classLink} href="404">
                {linkText}
            </a>
        )
    }
}

export default RefButton;