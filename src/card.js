import React from "react";

export default function Cards(props) {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{props.item.stats.rating}</h4>
                <p class="card-text">{props.item.title}</p>
            </div>
        </div>
    )
}