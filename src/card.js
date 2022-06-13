import React from "react";
import './card.css'

export default function Cards(props) {
    return (
        <div className="col-md-3 m-2">
            <div className="card shadow">
                <div className="card-body">
                    <div className="text-center">
                        <img className="image rounded-circle" src={props.item.imageUrl} alt="sky-image"></img>
                        <h3 className="card-title">{props.item.name}</h3>
                        <h5 className="card-text">{props.item.occupation}</h5>
                        <p className="">{props.item.email}</p>
                        <div className="">
                            <button className="btn Email-btn">Email</button>
                            <button className="btn linkedin-btn">Linkedin</button>
                        </div>
                    </div>
                    <div>
                        <h5>About</h5>
                        <p>I'm a Developer particularly interested in making the daily activities and tasks easier</p>
                        <div className="text-center">
                            <i class="link-icon fa fa-twitter" aria-hidden="true"></i>
                            <i class="link-icon fa fa-facebook" aria-hidden="true"></i>
                            <i class="link-icon fa fa-instagram" aria-hidden="true"></i>
                            <i class="link-icon fa fa-whatsapp" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}