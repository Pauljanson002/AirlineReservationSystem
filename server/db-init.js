const { Client } = require("pg");
const client = new Client("postgres://postgres:root0@localhost:5432/airline");
const createScript = `
    CREATE TABLE IF NOT EXISTS registered_user(
        id varchar(200) not null unique,
        name varchar(200) not null,
        username varchar(100) not null unique,
        hashed_password char(40),
        PRIMARY KEY(id)
        );
`;

client.connect().then(async () => {
  try {
    console.log("creating database schema");
    await client.query(createScript)
  }catch (e) {
     console.log("Error")
     console.log(e.message)
  }finally {
      client.end()
  }
});
