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
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <span 
                id="title"
                className={styles["title"]}
            >
                {item.title}
            </span>
            &nbsp;
            <span 
                className={styles["description"]}
                id="description"
            >
                {item.description}
            </span>
            <div className={styles["buttons"]}>
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