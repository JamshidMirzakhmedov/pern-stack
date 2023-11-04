const Pool = require("pg").Pool;

const pool = new Pool({
  user: "jamshidmirzakhmedov",
  password: "jamshidj0205",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
