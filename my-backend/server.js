const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Routes

app.get('/', (req, res)=>{
    res.send("This is Students API");
});

// Adding a student in a table

app.post('/api/students', async (req, res) => {
    try {
        const { name, andrewid, course, grade } = req.body;
        const newStudent = await pool.query(
            'INSERT INTO students (name, andrewid, course, grade) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, andrewid, course, grade]);
        res.json(newStudent.rows[0]);
        
    } catch (error) {
        console.error(error);
    }
  
});

// displaying all students in a table

app.get('/api/students', async(req, res) => {
    try {
        const allStudents = await pool.query('SELECT * FROM students');
        res.json(allStudents.rows);
    } catch (error) {
        console.error(error);
    }
  });


app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`)
});

