// Create web server
const express = require('express');
const app = express();
// Create connection to the database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'comments'
});