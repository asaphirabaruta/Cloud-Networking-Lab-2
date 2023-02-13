CREATE DATABASE university;

CREATE TABLE IF NOT EXISTS students(
    id serial PRIMARY KEY,
    name VARCHAR(255),
    andrewid VARCHAR(255),
    course VARCHAR(255),
    grade INT
);