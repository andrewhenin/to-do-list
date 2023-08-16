import './App.css';
import React from 'react';
import ItemComponent from './components/itemComponent';

export class item {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = false;
  }
}

function App() {
  const [activeTasks, setActiveTasks] = React.useState([]);
  const [completedTasks, setcompletedTasks] = React.useState([]);
  const [idCounter, setIdCounter] = React.useState(0);

  const handleAddTask = () => {
    const taskName = prompt("Enter task name");
    const taskDescription = prompt("Enter task description");
    const newItem = new item(idCounter, taskName, taskDescription);
    if (newItem) {
      setActiveTasks([...activeTasks, newItem]);
      setIdCounter(idCounter + 1);
    }
  }

  const handleRemoveTask = (taskId) => {
    const updatedActiveTasks = activeTasks.filter(task => task.id !== taskId);
    setActiveTasks(updatedActiveTasks);
    const updatedcompletedTasks = completedTasks.filter(task => task.id !== taskId);
    setcompletedTasks(updatedcompletedTasks);
  }

  const handleCheck = (task) => {
    if (task.completed) {
      task.completed = false;
      setActiveTasks([...activeTasks, task]);
      const updatedcompletedTasks = completedTasks.filter(current_task => task.id !== current_task.id);
      setcompletedTasks(updatedcompletedTasks);
    } else {
      task.completed = true;
      setcompletedTasks([...completedTasks, task])
      const updatedActiveTasks = activeTasks.filter(current_task => task.id !== current_task.id);
      setActiveTasks(updatedActiveTasks);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="hackathon-header">
          <span className="hackathon-text">7-Day Hackathon</span>
        </p>
        <h1>
          To-Do List
        </h1>
      </header>
      <div className="active-list">
        <h2>Active</h2>
        <button
          onClick={handleAddTask}
        >add</button>
        {activeTasks.map(task => (
          <ItemComponent item={task} removeFunc={handleRemoveTask(task.id)} checkFunc={handleCheck(task)}/>
        ))}
      </div>
      <div className="completed-list">
        <h2>Completed</h2>
        {completedTasks.map(task => (
          <ItemComponent item={task} removeFunc={handleRemoveTask(task.id)} checkFunc={handleCheck(task)} />
        ))}
      </div>
    </div>
  );
}

export default App;
