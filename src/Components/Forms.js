
import React from "react";


class Forms extends React.Component{
    constructor(){
        super()
        this.state={

            name:"",
            password:""

        }
        this.prasad=this.prasad.bind(this)

    }
    prasad(e){
        this.setState({
            name:e.target.value
            // password:this.state.password
         } )
    }

    render(){
        return(
            <diV>
                <label>username</label>
                <input type="text"  name="firstName"id="one" value={this.state.name} onChange={this.prasad}></input><br></br>
            <span>{this.state.name}</span>
            <label>password</label>
                <input type="password"  name="password" value={this.state.password}></input>
               <img src="../images copy/prasad passport photo.jpg"/> 

                </diV>
        )
    }
}
export default Forms;



