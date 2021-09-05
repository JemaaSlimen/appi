import './App.css';

   import React, { useEffect, useState } from "react";
   
   const App = () => {
    const [data, setData] = useState([]); // where to store the returned data
    const [error, setError] = useState(null); // where to store the coming errors
    useEffect(() => {
      function fetchData() {
        // the function to fetch data from the api
        fetch("https://hn.algolia.com/api/v1/search?query=redux")
          .then(res => res.json()) // when the result comes back with success here is what to do
          .then(res => setData(res.hits))
          .catch(err => setError(err)); // if there is an error here what you have to do.
      }
   
      fetchData();
    }, []);
   
    return (
      <div  >
        <ul>
          {data.map(course => (
            <li className="on">
              <a href={course.url}> {course.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
   };
   export default App;
   