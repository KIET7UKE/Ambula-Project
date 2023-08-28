import { useState } from 'react';
import tick from '../../assets/tick.png'
import deleteimg from '../../assets/deleteimg.png'
import undo from '../../assets/undo.png'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="flex flex-col items-center mt-10 h-screen">
      <h1 className="text-2xl font-bold mb-4">TODO List App</h1>
      <div className="w-80">
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center py-2 text-2xl border px-4 mt-5 rounded-lg shadow-xl border-red-950">
            <span className={`mr-4 ${task.completed ? 'line-through' : ''}`}>
              {task.text}
            </span>
            <button
              className="text-green-500 mr-2"
              onClick={() => toggleTask(index)}
            >
              {task.completed ? <div className='h-7 w-7'><img src={undo} alt="" /></div> : <div className='h-8 w-8'><img src={tick} alt="" /></div>}
            </button>
            <button
              className="text-red-500"
              onClick={() => removeTask(index)}
            >
              <img src={deleteimg} alt="" className='h-7 w-7'/>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4">Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
    </div>
  );
}

export default App;
