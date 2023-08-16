import React from "react";
import { ReactComponent as XIcon } from "../assets/Red_X";
// import item from "../utils/models.js"

const ItemComponent = ({item, onClickFunc}) => {
    return (
        <div>
            <span>
                Title: {item.title}
            </span>
            &nbsp;
            <span>
                Description: {item.description}
            </span>
            <div>
                <button
                    onClick={()=> onClickFunc(item.id)}
                >
                    <XIcon />
                </button>
            </div>
        </div>
    )
  }

export default ItemComponent;