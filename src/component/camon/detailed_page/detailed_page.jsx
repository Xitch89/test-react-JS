import React, { Component }  from "react";
import classes from "./detail_page.module.css";


class DetailedPage extends Component {
    constructor(props){
        super(props);
        this.props = {
            weyImage: '',
            mainText: '',
            smallText: '',
            sumText: ''
        }
    }
    render() {
        const {weyImage, mainText, sumText} = this.props
        return(
            <div className={classes.detail}>
                <img className={classes.image} src={weyImage} alt="404" />
                <h1>{mainText}</h1>
                <p className={classes.smallText}>{sumText}</p>
            </div>
        )
    }
};

export default DetailedPage;