import React from 'react'
import {Form} from 'react-bootstrap';
import {useState}from 'react';
import {useDispatch} from 'react-redux'
import {add}from '../../Redux/action/action'
import './AddTask.css'

function AddTask() {
    const [Text, setText] = useState("");
    const dispatch = useDispatch()

    const handleChange = (e) => {e.preventDefault();
    dispatch(add({ id: Math.random(), text: Text, isDone: false }));
    setText("");
    } 

 return (
    <Form className="addtask">
    <Form.Control
        type="text"
        placeholder="Enter task"
        value={Text}
        onChange={(e) => setText(e.target.value)}
    />
    <div className="butADD">
    <button variant="light" onClick={handleChange}> 
       Add 
    </button>
    </div>
    </Form>
  );
}

export default AddTask

