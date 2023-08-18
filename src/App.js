import './App.css';
import React from 'react';
import { TaskComponent } from './components/taskComponent';
import Task from './utils/models';


function App() {
  const [activeTasks, setActiveTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);
  const [idCounter, setIdCounter] = React.useState(0);


  const handleAddTask = () => {
    let taskName = prompt("Enter task name");
    while ((taskName === "") || (taskName === null)) {
      taskName = prompt("Task name can't be empty. Try again.");
    }
    let taskDescription = prompt("Enter task description");
    const newItem = new Task(idCounter, taskName, taskDescription);
    setActiveTasks([...activeTasks, newItem]);
    setIdCounter(idCounter + 1);
  }
  
  const handleRemoveTask = (task) => {
    if (task.completed) {
      const updatedcompletedTasks = completedTasks.filter(curr_task => task.id !== curr_task.id);
      setCompletedTasks(updatedcompletedTasks);
    } else {
      const updatedActiveTasks = activeTasks.filter(curr_task => task.id !== curr_task.id);
      setActiveTasks(updatedActiveTasks);
    }
  }

  const handleCheck = (task) => {
      const updatedTask = { ...task, completed: !task.completed };
      
      if (!task.completed) {
        setCompletedTasks([...completedTasks, updatedTask]);
        setActiveTasks(activeTasks.filter(current_task => current_task.id !== task.id));
      } else {
        setActiveTasks([...activeTasks, updatedTask]);
        setCompletedTasks(completedTasks.filter(current_task => current_task.id !== task.id));
    };
  };

  function handleEdit(task) {
      task.title = prompt("Enter task name");
      task.description = prompt("Enter task description");
      task.id = idCounter;
      setIdCounter(idCounter + 1);
  };

  function handleClearActive() {
    if (activeTasks.length === 0) {
      alert("No active tasks to clear.");
      return;
    }
    const userChoice = window.confirm("Do you want to proceed?");
    if (userChoice) {
      setActiveTasks([]);
    }
  }

  function handleClearCompleted() {
    if (completedTasks.length === 0) {
      alert("No completed tasks to clear.");
      return;
    }
    const userChoice = window.confirm("Do you want to proceed?");
    if (userChoice) {
      setCompletedTasks([]);
    }
  }

  function handleMarkCompleted() {
    if (activeTasks.length === 0) {
      alert("No active tasks to mark.");
      return;
    }
    const updatedActiveTasks = activeTasks.map(task => {
      task.completed = true;
      return task;
    });
    setCompletedTasks([...completedTasks, ...updatedActiveTasks]);
    setActiveTasks([]);
  }

  function handleMarkActive() {
    if (completedTasks.length === 0) {
      alert("No completed tasks to mark.");
      return;
    }
    const updatedCompletedTasks = completedTasks.map(task => {
      task.completed = false;
      return task;
    });
    setActiveTasks([...activeTasks, ...updatedCompletedTasks]);
    setCompletedTasks([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="hackathon-header">
          <span className="hackathon-text">7-Day Hackathon</span>
          <span className="project-number">Project 1</span>
        </div>
        <h1>
          To-Do List
        </h1>
      </header>
      <button
        className="add-button"
        onClick={() => handleAddTask()}
      >
        + Add task
      </button>
      <div className="tasks">
        <div className="active-list">
          <div className="title-button">
            <h2>Active</h2>
            <button
            className="mark-button"
            onClick={() => handleMarkCompleted()}
          >
            Mark All As Completed
          </button>
            <button 
            className="clear-button"
            onClick={() => handleClearActive()}
          >
            clear All Tasks
          </button>
          </div>
          <div className="active-tasks">
            {activeTasks.map(task => (
              <TaskComponent item={task} removeFunc={handleRemoveTask} checkFunc={handleCheck} editFunc={handleEdit} key={task.id} />
            ))}
          </div>
        </div>
        <div className="completed-list">
        <div className="title-button">
          <h2>Completed</h2>
          <button
            className="mark-button"
            onClick={() => handleMarkActive()}
          >
            Mark All As Active
          </button>
          <button 
            className="clear-button"
            onClick={() => handleClearCompleted()}
          >
            clear All Tasks
          </button>
        </div>
          <div className="completed-tasks">
            {completedTasks.map(task => (
              <TaskComponent item={task} removeFunc={handleRemoveTask} checkFunc={handleCheck} editFunc={handleEdit} key={task.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
