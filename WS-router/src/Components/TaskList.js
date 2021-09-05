import React from 'react'
import ToDo from './ToDo'

const TaskList = ({ List, handleRemove, handleEdit }) => {
  return (
    <div>
      {List.map((todo) => (
        <ToDo
          key={todo.id}
          Task={todo}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TaskList
