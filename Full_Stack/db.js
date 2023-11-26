const Pool = require('pg').Pool;
const pool = new Pool({
  user: "postgres",
  password: "q1w2e3r4t5y6",
  host: "localhost",
  port: 5432,
  database: "wheels"
});

module.exports = pool