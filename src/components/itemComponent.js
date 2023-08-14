import React from "react";
import styles from "../styles/itemComponent.module.css";
import item from "../utils/models.js"


const ItemComponent = (myitem: item) => {
    return (
        <div>
            <div>{myitem.name}</div>
            <div>{myitem.description}</div>
        </div>
    )
}

export default ItemComponent;