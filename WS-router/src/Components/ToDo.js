import React from 'react'
import { Button } from 'semantic-ui-react';
import EditeTask from './EditeTask';

const ToDo = ({ Task, handleRemove, handleEdit }) => {
  return (
    <div>
      <h1 style={{ color: "white" }}> {Task.description}</h1>

      <Button.Group>
        <Button basic color="red" onClick={() => handleRemove(Task.id)}>
          Remove
        </Button>
        <EditeTask Task={Task} handleEdit={handleEdit} />
        <Button basic color="blue">
          {Task.isDone ? "Done" : "Undone"}
        </Button>
      </Button.Group>
    </div>
  );
};

export default ToDo
