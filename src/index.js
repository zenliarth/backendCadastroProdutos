const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_products',
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  let sql = 'SELECT * FROM products';

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/products', (req, res) => {
  let data = req.body;
  let sql = `INSERT INTO products (name, price, quantity, description ) VALUES ('${data.name}', '${data.price}', '${data.quantity}', '${data.description}')`;

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.get('/products', (req, res) => {
  let sql = 'SELECT * FROM products';

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/products/:id', (req, res) => {
  let sql = `SELECT * FROM products WHERE idproducts = ${req.params.id}`;

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.delete('/products/:id', (req, res) => {
  let sql = `DELETE FROM products WHERE idproducts = ${req.params.id}`;

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.put('/edit', (req, res) => {
  let data = req.body;
  let sql = `UPDATE products SET name = '${data.name}', price = '${data.price}', quantity = '${data.quantity}', description = '${data.description}' WHERE idproducts = ${data.id}`;

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  }
  );
});

app.listen(4000, () => {
  console.log(`🚀 Server is running on port 4000`);
});
