import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import axios from 'axios';
import Table from './components/table';

function App() {

  const [name, setName] = useState("");
  const [andrewid, setAndrewid] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  
  const onSubmitForm = async e =>{
    e.preventDefault();
    try {
      const body = { name, andrewid, course, grade };
      await axios.post("http://localhost:3001/api/students", body);
      setName("");
      setAndrewid("");
      setCourse("");
      setGrade("");      

    } catch (err) {
      console.error(err.message);      
    }
  };

  return (
    <div className="container">

      <div className="row">
       
        <div className="col-md-6">
          <div className="card mt-5 p-3 shadow">
          <h2 className="d-flex justify-content-center p-3">Enter Student Information</h2>
          <form onSubmit={onSubmitForm}>

            <div className="row px-3">
              <div className="col-2"><label>Name:</label></div>
              
              <div className="col-10">
                <input 
                className="form-control shadow-sm" 
                type="text" 
                value={name}
                onChange = {e=>setName(e.target.value)}
                required
                />
              </div>
              
            </div>

            <br/>
            
            <div className="row px-3">
              <div className="col-2"><label>AndrewID:</label></div>
              <div className="col-10">
                <input 
                className="form-control shadow-sm" 
                type="text" 
                value={andrewid}
                onChange = {e=>setAndrewid(e.target.value)}
                required
                />
              </div>
            </div>

            <br/>

            <div className="row px-3">
              <div className="col-2"><label>Course:</label></div>
              <div className="col-10">
                <input 
                className="form-control shadow-sm" 
                type="text" 
                value={course} 
                onChange= {e=>setCourse(e.target.value)}
                required
                />
              </div>
            </div>

            <br/>

            <div className="row px-3">
              <div className="col-2"><label>Grade:</label></div>
              <div className="col-10">
                <input 
                className="form-control shadow-sm" 
                type="number" 
                value={grade}
                onChange= {e=>setGrade(e.target.value)}
                required
                />
              </div>
            </div>

            <br/>

            <div className="d-flex justify-content-center">
            <button className='btn btn-outline-primary rounded shadow-sm'>Add</button>
            </div>            

          </form>
        </div>
        </div>
        <div className="col-md-6">
          <Table/>
        </div>

      </div>      
      
    </div>
  );
}

export default App;
