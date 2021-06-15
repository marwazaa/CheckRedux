import React from "react";
import "./Task.css";
import { useDispatch } from "react-redux";
import { deletet, done } from "../../Redux/action/action";
import Edit from "../Edit/Edit";

function Task({ task }) {
  console.log({ task });
  const dispatch = useDispatch();
  return (
    
      <div className="totaltask">
         <p className={task.isDone?'done':null}>{task.text}</p>
        <button className={task.isDone?'onedone':'twodone'} onClick={() => dispatch(done(task.id))}>{task.isDone?'done':'undone'}</button>
        <button
          variant="outline-primary"
          onClick={() => dispatch(deletet(task.id))}
        >
          Delete
        </button>
        <Edit task={task} />
      
    </div>
  );
}

export default Task;
