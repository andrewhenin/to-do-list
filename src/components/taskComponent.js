import React from "react";

export const TaskComponent = ({item, removeFunc, checkFunc, editFunc}) => {
    return (
        <div>
            <input
                type="checkbox"
                onChange={() => checkFunc(item)}
                checked={item.completed}
            >
            </input>
            <span>
                Title: 
                <span 
                    id="title"
                >
                    {item.title}
                </span>
            </span>
            &nbsp;
            <span>
                Description: 
                <span 
                    id="description"
                >
                    {item.description}
                </span>
            </span>
            <div>
                <button
                    onClick={() => editFunc(item)}
                >
                    edit
                </button>
                <button
                    onClick={() => removeFunc(item)}
                >
                    x
                    {/* <img alt="x" src="../assets/Red_X.png"/> */}
                </button>
            </div>
        </div>
    )
  }

export default TaskComponent;