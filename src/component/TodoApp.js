import React, { useState, useEffect } from 'react';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetch('https://run.mocky.io/v3/cb74646f-0bf9-4ba8-a167-d652a413c74b')
            .then(response => response.json())
            .then(data => {
                setTasks(data);
            })
            .catch(error => {
                console.error("Error fetching tasks:", error);
            });
    }, []);

    const addTask = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (taskInput.trim()) {
                setTasks([...tasks, { id: Date.now(), task: taskInput, completed: false }]);
                setTaskInput('');
            } else {
                alert("Task cannot be empty! Please enter a task."); 
            }
        }
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    return (
        <div className="container max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    onKeyDown={addTask}
                    className="flex-1 border rounded px-3 py-2 mr-2"
                    placeholder="Add a new task..."
                />
                <button onClick={addTask} className="btn mx-1">Add Task</button>
            </div>

            <div className="flex justify-center mb-4">
                <button onClick={() => setFilter('all')} className="btn mx-1">All</button>
                <button onClick={() => setFilter('pending')} className="btn mx-1">Pending</button>
                <button onClick={() => setFilter('completed')} className="btn mx-1">Completed</button>
            </div>

            <ul className="space-y-2">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map(task => (
                        <li key={task.id} className="flex justify-between items-center border-b pb-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
                                    className="mr-2"
                                />
                                <span className={task.completed ? 'line-through text-gray-400' : ''}>
                                    {task && task.task}
                                </span>
                            </div>
                            <button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No tasks available</li>
                )}
            </ul>

            <div className="mt-4 text-center">
                <span>Total Tasks: {tasks.length} | Completed Tasks: {tasks.filter(task => task.completed).length}</span>
            </div>
        </div>
    );
};

export default TodoApp;
