import React from "react";

import { useRef } from "react";

function Useref(){

    var a=useRef("")
    function prasad(e){
        e.preventDefault()
    console.log(a.current.value)
    }
    return(
        <div>
            <form onSubmit={prasad}>
            <label>NAME USER</label>
            <input ref={a} type="text"></input>
            <button>prasad</button>
            </form>
        </div>
    )
}

export default Useref;