import React from "react";
import Style from "./Style.css";
import Navs from "./Navs";

class About extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <diV>
                <Navs/>
                <h1>hi iam praneeth{this.props.name}</h1>{this.props.interest}
                <h1>hi iam annanya</h1>{this.props.interest}
                <h1>hi iam prasad</h1>{this.props.name}{this.props.interest}
            </diV>
        )
    }
}

export default About;