import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import {List} from './DataTask';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [newList, setNewList] = useState(List);
  const handleAdd=(newTask)=>{
    setNewList([...newList,newTask])
  }
  const handleRemove =(deleteId) => {
   console.log(deleteId)
    setNewList(newList.filter((elmt) => elmt.id !== deleteId));
  }
  const handleEdit =(editeId,newdesc) => {
    setNewList(newList.map((elmt) => elmt.id == editeId ? {...elmt,description:newdesc }:elmt));
  }
  return (
    <div style={{ height: "1000px" }} className="body">
      <div className="free">
        <h1 className="title">ToDo-List </h1>
      </div>
      <AddTask handleAdd={handleAdd} />
      <TaskList
        List={newList}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
