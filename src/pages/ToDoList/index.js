import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const GET_SAVED_TASK = localStorage.getItem("savedTasks");
    const PARSED_GET_SAVED_TASK = JSON.parse(GET_SAVED_TASK)
    console.log(PARSED_GET_SAVED_TASK)
    useEffect(() => {
        setTasks(PARSED_GET_SAVED_TASK)
    }, [])
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
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    useEffect(() => {
        localStorage.setItem("savedTasks", JSON.stringify(tasks))
    }, [tasks])

    return (
        <div style={{ height: '100vh' }}>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <span style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 22 }}>To Do List</span>
                    <div>
                        <span style={{ color: '#FFFFFF', textAlign: 'right' }}><b>Total tasks:</b> {tasks.length}</span>
                        <div style={{ marginLeft: 20 }} />
                        <span style={{ color: '#FFFFFF', textAlign: 'right' }}><b>Completed tasks:</b> {tasks.filter((task) => task.completed).length}</span>
                    </div>
                    <Link to={'/'} type="button" class="btn btn-light">HOME</Link>
                </div>
            </nav>
            {
                tasks?.length == 0 ?
                    <div style={{ height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ alignSelf: 'center' }}>No Task Added</span>
                    </div>
                    :
                    <div style={{ overflowY: 'scroll' }}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }}>S.No</th>
                                    <th style={{ width: '60%' }}>Title</th>
                                    <th style={{ width: '30%' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map((task, index) => (
                                        <tr>
                                            <th style={{ width: '10%' }}>{index + 1}</th>
                                            <td style={{ width: '60%' }}><span
                                                style={{
                                                    textDecoration: task.completed ? 'line-through' : 'none',
                                                }}
                                            >
                                                {task.text}
                                            </span></td>
                                            <td style={{ width: '30%' }}>
                                                <button onClick={() => toggleTask(index)} type="button" class={task.completed ? "btn btn-warning" : "btn btn-info"}>{task.completed ? 'Undo' : 'Complete'}</button>
                                                {' '}
                                                <button onClick={() => removeTask(index)} type="button" class="btn btn-danger">Remove</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
            }

            <div style={{ backgroundColor: '#212529', padding: 15, position: 'absolute', bottom: 0, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ width: '79%' }}>
                    <input type="text" class="form-control" placeholder='Type here...' value={newTask}
                        onChange={(e) => setNewTask(e.target.value)} />
                </div>
                <div style={{ width: '19%' }}>
                    <button type="button" class="btn btn-success" style={{ width: '100%' }} onClick={addTask}>+ ADD</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoList