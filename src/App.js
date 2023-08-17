import './App.css';
import React from 'react';
import { TaskComponent } from './components/taskComponent';
import Task from './utils/models';


function App() {
  const [activeTasks, setActiveTasks] = React.useState([]);
  const [completedTasks, setcompletedTasks] = React.useState([]);
  const [idCounter, setIdCounter] = React.useState(0);

  const handleAddTask = () => {
    const taskName = prompt("Enter task name");
    const taskDescription = prompt("Enter task description");
    const newItem = new Task(idCounter, taskName, taskDescription);
    setActiveTasks([...activeTasks, newItem]);
    setIdCounter(idCounter + 1);
  }

  const handleRemoveTask = (task) => {
    if (task.completed) {
      const updatedcompletedTasks = completedTasks.filter(curr_task => task.id !== curr_task.id);
      setcompletedTasks(updatedcompletedTasks);
    } else {
      const updatedActiveTasks = activeTasks.filter(curr_task => task.id !== curr_task.id);
      setActiveTasks(updatedActiveTasks);
    }
  }

  const handleCheck = (task) => {
    return () => {
      const updatedTask = { ...task, completed: !task.completed };
      
      if (!task.completed) {
        setcompletedTasks([...completedTasks, updatedTask]);
        setActiveTasks(activeTasks.filter(current_task => current_task.id !== task.id));
      } else {
        setActiveTasks([...activeTasks, updatedTask]);
        setcompletedTasks(completedTasks.filter(current_task => current_task.id !== task.id));
      }
    };
  };
  
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
      <div className="active-list">
        <h2>Active</h2>
        <button
          onClick={() => handleAddTask()}
        >
          add
        </button>
        <div>
          {activeTasks.map(task => (
            <TaskComponent item={task} removeFunc={handleRemoveTask} checkFunc={handleCheck(task)} key={task.id} />
          ))}
        </div>
      </div>
      <div className="completed-list">
        <h2>Completed</h2>
        <div>
          {completedTasks.map(task => (
            <TaskComponent item={task} removeFunc={handleRemoveTask} checkFunc={handleCheck(task)} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
