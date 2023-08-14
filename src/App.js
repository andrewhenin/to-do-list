import './App.css';
import React from 'react';
import ItemComponent from './components/itemComponent';

function App() {
  const [currentTasks, setCurrentTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);
  
  const currentTasksList = currentTasks.map((task, index) => {
    return (
      <ItemComponent key={index} task={task} />
    );
  });

  const completedTasksList = completedTasks.map((task, index) => {
    return (
      <ItemComponent key={index} task={task} />
    );
  });

  const handleAddTask = () => {
    const taskName = prompt("Enter task name");
    const taskDescription = prompt("Enter task description");
    const newItem = ItemComponent(taskName, taskDescription);
    if (newItem) {
      setCurrentTasks([...currentTasks, newItem]);
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
      <div className="current-list">
        <h2>Current</h2>
        <button
          onClick={handleAddTask}
        >add</button>
        {currentTasksList}
      </div>
      <div className="completed-list">
        <h2>Completed</h2>
        {completedTasksList}
      </div>
    </div>
  );
}

export default App;
