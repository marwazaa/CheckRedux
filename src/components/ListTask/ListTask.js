import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import {useState} from 'react'
import "./ListTask.css";

function ListTask() {
  const listTasks = useSelector((state) => state.list);
  console.log({ listTasks });
  const [all, setAll] = useState(true);

  return (
    <div>
      <div className="ALLDONE">
      <button onClick={() => setAll(!all)}>{all ? "ALL" : "DONE"}</button>
      </div>
      
        <ul>
          {all? listTasks.map((el) => <Task task={el}/>): listTasks.filter((el) => el.isDone === true).map((el) => <Task task={el}/>)}
        </ul>
      
    </div>
  );
}

export default ListTask;
