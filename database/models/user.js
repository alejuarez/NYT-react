const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

// Define articSchema
const artiSchema = new Schema({
 title: { type: String, unique: false, required: false },
  date: { type: String, unique: false, required: false },
  url: {}
});