import React from "react";

import axios from "axios";

class Prasad extends React.Component{
    constructor(){
        super()
this.state={
    array:[]
}

    }

    componentDidMount(){
        let a="https://jsonplaceholder.typicode.com/users";

        axios.get(a).then(function prasad(data){
            console.log(data)

            this.setState({
                array:data


            })

        }).catch(function mahesh(nodata){
            console.log(nodata)
        })
    }

    render(){
        console.log("value",this.state.array)
        return(
            <div>
                <h1>hi iam chitti robo{this.state.array}</h1>

            </div>
        )
    }
}
export default Prasad;