import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

export default function TasksPage() {
  // Persist tasks
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('All');
  const [newTaskText, setNewTaskText] = useState('');

  const handleAdd = () => {
    if (!newTaskText.trim()) return;
    const newTask = { id: Date.now(), text: newTaskText.trim(), completed: false };
    setTasks([newTask, ...tasks]);
    setNewTaskText('');
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'Active') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true; // All
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <div className="mb-4 flex space-x-2">
        <input
          className="flex-1 px-3 py-2 border rounded"
          type="text"
          placeholder="Enter new task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <Button variant="primary" onClick={handleAdd}>Add Task</Button>
      </div>

      <div className="mb-4 space-x-2">
        <Button variant={filter === 'All' ? 'primary' : 'secondary'} onClick={() => setFilter('All')}>All</Button>
        <Button variant={filter === 'Active' ? 'primary' : 'secondary'} onClick={() => setFilter('Active')}>Active</Button>
        <Button variant={filter === 'Completed' ? 'primary' : 'secondary'} onClick={() => setFilter('Completed')}>Completed</Button>
      </div>

      <div className="space-y-2">
        {filteredTasks.map(task => (
          <Card key={task.id} className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.text}</span>
            </label>
            <Button variant="danger" onClick={() => handleDelete(task.id)}>Delete</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
