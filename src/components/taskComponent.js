import React from "react";
import styles from "../styles/itemComponent.module.css";

export const TaskComponent = ({item, removeFunc, checkFunc, editFunc}) => {
    return (
        <div className={styles["task-component"]}>
            <input
                type="checkbox"
                onChange={() => checkFunc(item)}
                checked={item.completed}
            >
            </input>
            <span 
                id="title"
                className="title"
            >
                {item.title}
            </span>
            &nbsp;
            <span 
                id="description"
            >
                {item.description}
            </span>
            <div>
                <button
                    onClick={() => editFunc(item)}
                >
                    Edit
                </button>
                &nbsp;
                <button
                    onClick={() => removeFunc(item)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
  }

export default TaskComponent;