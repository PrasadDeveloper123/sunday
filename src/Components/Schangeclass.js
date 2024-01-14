import React from "react";
class Schangeclass extends React.Component{

    constructor(){

        super()
this.state={

    name:"prasad"

}
this.prabhas=this.prabhas.bind(this)
    
    }
    prabhas(){
        this.setState({
            name:"praneeth krishnapuram"
        })
    }
    
    

    render(){
        return(
            <div>
                <h1 onClick={this.prabhas}>hi iam class component<br></br>{this.state.name}</h1>
            </div>
        )
    }
}

export default Schangeclass