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
  const [currentTasks, setCurrentTasks] = React.useState([]);
  const [idCounter, setIdCounter] = React.useState(0);

  const handleRemoveTask = (taskId) => {
    const updatedTasks = currentTasks.filter(task => task.id !== taskId);
    setCurrentTasks(updatedTasks);
  }

  const currentTasksList = currentTasks.map((task) => (
    <div key={task.id}>
      <ItemComponent item={task} onClickFunc={handleRemoveTask}/>
    </div>
  ));

  const handleAddTask = () => {
    const taskName = prompt("Enter task name");
    const taskDescription = prompt("Enter task description");
    const newItem = new item(idCounter, taskName, taskDescription);
    if (newItem) {
      setCurrentTasks([...currentTasks, newItem]);
      setIdCounter(idCounter + 1);
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
      {/* <div className="com pleted-list">
        <h2>Completed</h2>
        {completedTasksList}
      </div> */}
    </div>
  );
}

export default App;
