const Pool = require("pg").Pool;

const pool = new Pool({
    host:'DATABASE',
    user:'postgres',
    password:'password',    
    port: 5432,
    database:'university'
});

module.exports = pool;

// docker run -d -p 4321:5432 -v pg-data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password --name DATABASE pg-db