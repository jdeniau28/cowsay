const identite = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say( {
    text :`Hi, my name is ${identite.name} and my campus ${identite.campus}` ,
    e : "oO",
    T : "U "
}));
