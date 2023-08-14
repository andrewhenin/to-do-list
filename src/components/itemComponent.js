import React from "react";
import styles from "../styles/itemComponent.module.css";
// import item from "../utils/models.js"

const ItemComponent = (props) => {
    return (
        <div>
            <div>{props.item.name}</div>
            <div>{props.item.description}</div>
        </div>
    )
}

export default ItemComponent;