import React from "react";

export const TaskComponent = ({item, removeFunc, checkFunc}) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => checkFunc(item)}
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