const mongoose = require("mongoose");
const { connect } = mongoose;
let connection = connect("mongodb+srv://affanAhmad:affan123@cluster0.06zj2ma.mongodb.net/timely?retryWrites=true&w=majority");
module.exports = connection;
