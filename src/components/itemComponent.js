import React from "react";
import styles from "../styles/itemComponent.module.css";
// import item from "../utils/models.js"

const ItemComponent = (props, {onClickFunc}) => {
    return (
        <div>
            <span>
                Title: {props.item.title}
            </span>
            &nbsp;
            <span>
                Description: {props.item.description}
            </span>
            <div>
                <button
                    onClick={onClickFunc}
                >
                    <img alt="x" src="../assets/Red_X.png" />
                </button>
            </div>
        </div>
    )
}

export default ItemComponent;