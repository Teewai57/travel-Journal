import React from "react";

export default function Sort(props) {
    return(
        <div className="d-flex ">
            <div className="m-2"><button value = 'all' onClick={props.handler}>All</button></div>
            <div className="m-2"><button  value = 'male'  onClick={props.handler}>Males</button></div>
            <div className="m-2"><button  value = 'female'  onClick={props.handler} > Females</button></div>
        </div>
    )
}