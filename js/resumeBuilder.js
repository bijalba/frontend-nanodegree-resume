/*$("#main").append("Christopher Bijalba");

var awesomeThoughts = "I am Christopher Bijalba and I am AWESOME!"
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);

var name = "Christopher Bijalba";
var role = "Typographer";

var skills = [];

$("#main").append(skills[0]);*/

var bio = {
	"name" : "Christopher",
	"role" : "Typographer",
	"contacts" : {
		"mobile": "312-659-8522",
		"email": "bijalba@gmail.com",
		"github": "bijalba",
		"twitter": "@bijalba",
		"location": "Chicago"
	},
	"welcome" : "Hello, weird.",
	"skills" : [
	"awesomeness", "programming", "teaching", "JS"
	],
	"bioPic": "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#main").append(bio.contacts.mobile);
$("#main").append(bio.contacts.email);
$("#main").append(bio.contacts.github);
$("#main").append(bio.contacts.twitter);
$("#main").append(bio.contacts.location);
$("#main").append(bio.contacts.welcome);
$("#main").append(bio.skills[0]);
$("#main").append(bio.skills[1]);
$("#main").append(bio.skills[2]);
$("#main").append(bio.skills[3]);
$("#main").append(bio.contacts.biopic);

var work = { };
var education = { };
work.position = "Internet Technology Manager";
work.employer = "Lincoln Park Zoo";
work.years = 10;
work.city = "Chicago";

education["name"] = "Institute of Design";
education["years"] = 4;
education["city"] = "Chicago";

$("#main").append(work["position"]);
$("#main").append(education.name);
