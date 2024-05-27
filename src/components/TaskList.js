import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  
  const taskItems = tasks.map((task) => (
    <Task
      text={task.text}
      category={task.category}
      key={task.text}
      onDeleteTask={onDeleteTask}
      />
    ));
  
  
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
