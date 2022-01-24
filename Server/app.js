const express = require('express');
const app = express();
const db = require('./models');
const sequelize = db.sequelize;
const port = 5432;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.

app.get("/customer", async(req, res) => {
    try {
        const allCustomers = await pool.query(
            "SELECT * FROM customer",
        );

        res.json(allCustomers.rows)

    } catch (err) {
        console.log(err.message)
    }

})

app.get('/customer/:customer_id', db.getCustomerById)

app.post("/customer", async (req, res) => {
    try {
        const { customer_id, first_name, last_name, sex } = req.body;
        const newCustomer = await pool.query("INSERT INTO customer (customer_id, first_name, last_name, sex) VALUES ($1, $2, $3, $4) RETURNING *",
            [customer_id, first_name, last_name, sex]);

        res.json(newCustomer.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`)); 
