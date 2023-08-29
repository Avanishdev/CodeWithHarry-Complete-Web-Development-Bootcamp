// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
console.log('we are started!');
const kittySchema = new mongoose.Schema({
    name: String
  });
const Kitten = mongoose.model('Kitten', kittySchema);
var harrykitten= new Kitten({ name: 'harryKitty' });
console.log(harrykitty.name); // 'Silence'
kittySchema.methods.speak = function () {
    var greeting = this.name
    console.log(greeting);
  }
  harrykitty.save(function (err, harrykitty) {
    if (err) return console.error(err);
    harrykitty.speak();
  });