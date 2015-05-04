/*$("#main").append("Christopher Bijalba");

var awesomeThoughts = "I am Christopher Bijalba and I am AWESOME!"
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);*/

var name = "Christopher Bijalba";
var role = "Typographer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);