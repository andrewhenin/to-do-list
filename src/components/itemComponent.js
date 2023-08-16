import React from "react";
// import item from "../utils/models.js"

const ItemComponent = ({item, removeFunc, checkFunc}) => {
    return (
        <div>
            <input
                type="checkbox"
                onClick={checkFunc(item)}
            >

            </input>
            <span>
                Title: {item.title}
            </span>
            &nbsp;
            <span>
                Description: {item.description}
            </span>
            <div>
                <button
                    onClick={()=> removeFunc(item.id)}
                >
                    x
                    {/* <img alt="x" src="../assets/Red_X.png"/> */}
                </button>
            </div>
        </div>
    )
  }

export default ItemComponent;