import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Table() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get('http://localhost:3001/api/students');
          setData(response.data);
          console.log(data);
        } catch (error) {
          console.err(error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {    
        fetchData();
      });

    return ( 
        <table className="table mt-5 shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">AndrewID</th>
                <th scope="col">Course</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item =>(
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.andrewid}</td>
                  <td>{item.course}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            
            </tbody>
          </table>
     );
}

export default Table;