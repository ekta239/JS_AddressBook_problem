const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to SQL Database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql" // Change to "postgres" for PostgreSQL
});

// Define Contact Model
const Contact = sequelize.define("Contact", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    zip: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: { is: /^[1-9][0-9]{5}$/ } // PIN code validation
    },
    phoneNumber: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: { is: /^[6-9][0-9]{9}$/ } // Phone number validation
    },
    email: { 
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    }
});

// Sync Database
sequelize.sync()
    .then(() => console.log("✅ Database & Tables Created"))
    .catch(err => console.error("❌ DB Connection Error:", err));

// Create Contact API
app.post("/contacts", async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json({ message: "✅ Contact Created Successfully", contact });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Contacts API
app.get("/contacts", async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
