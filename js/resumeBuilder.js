var bio = {
	"name" : "Christopher Bijalba",
	"role" : "Typographer",
	"contacts" : {
		"mobile": "312-659-8522",
		"email": "bijalba@gmail.com",
		"github": "bijalba",
		"twitter": "@bijalba",
		"location": "Chicago"
	},
	"welcomeMessage" : "Hello, weird.",
	"skills" : ["awesomeness", "programming", "teaching", "JS"]
};

var education = { 
	"schools": [
	{
		"name": "Eckerd College",
		"location": "Saint Petersburg, FL, US",
		"degree": "BA",
		"majors" : ["CompSci", "French"],
		"url" : "http://id.iit.edu",
		"dates" : "2000-2005"
	}],
	"onlineCourses": [
	{
		"title": "iOS Nerd",
		"school": "Udacity",
		"url" : "http://www.udacity.com",
		"dates" : "2010-2015"
	}]
};

var work = {
	"jobs" : [
	{
		"employer":"Lincoln Park Zoo",
		"title":"Internet Technology Manager",
		"location":"Chicago",
		"dates":"2005-2015",
		"description":"In charge of nothing much."
	}, 
	{
		"employer":"Firehaus Design",
		"title":"Web Manager",
		"location":"Lincoln Park Zoo",
		"dates":"2002-2007",
		"description":"Who cares a tall."
	}]


};

var projects = {
	"projects" : [
	{
		"title":"Website",
		"dates":"2004-2015",
		"description":"Underwhelming.",
		"images" : ["http://jsonlint.com/c/images/logo_arc90.png"]
	},
	{
		"title":"Derpy",
		"dates":"2014-2016",
		"description":"Whelming.",
		"images" : ["http://jsonlint.com/c/images/logo_arc90.png", "http://jsonlint.com/c/images/logo_arc90.png"]
	}

	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
/*
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
*/

$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(internationalizeButton);


HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(HTMLmobile);
$("#topContacts").append(HTMLemail);
$("#topContacts").append(HTMLtwitter);
$("#topContacts").append(HTMLgithub);
$("#topContacts").append(HTMLlocation);

$("#footerContacts").append(HTMLmobile);
$("#footerContacts").append(HTMLemail);
$("#footerContacts").append(HTMLtwitter);
$("#footerContacts").append(HTMLgithub);
$("#footerContacts").append(HTMLlocation);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var singleItem="";
	for (var i = 0; i < bio.skills.length; i++){
		singleItem=HTMLskills.replace("%data%",bio.skills[i])
		$("#skills").append(singleItem);
	}
}

function displayWork(){

	for (job in work.jobs){

		var singleEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var singleTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var singleDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var singleLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var singleDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(singleEmployer + singleTitle).append(singleDates).append(singleLocation).append(singleDescription);
	}
}

displayWork();


var toggle=0;

function inName(name){
	name = name.trim().split(" ");
	if (!toggle) {
		name[1] = name[1].toUpperCase();
		toggle=1;
	} else {
		name[1] = name[1].slice(0,1).toUpperCase() + name[1].slice(1).toLowerCase();
		toggle=0;
	}
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}


projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		console.log(projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle); // was missing all :last
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		for (image in projects.projects[project].images){ //got this wrong
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);

/*
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

id = education

*/


education.display = function() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("#", education.schools[school].url);
		formattedName = formattedName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		for (major in education.schools[school].majors){ //got this wrong
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajor);
		}
	}
	
	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("#", education.onlineCourses[course].url);
		formattedTitle = formattedTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

		$(".education-entry:last").append(formattedTitle + formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
	}

}

education.display();



