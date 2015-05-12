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
	"welcomeMessage" : "Hello, weird. This is an introduction to Christopher Bijalba. Ready?",
	"image": "images/pic.jpg",
	"skills" : ["Photography", "Typography", "Computer Science", "Music"],

	display: function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedImage = HTMLbioPic.replace("%data%",bio.image);

		$("#header").prepend(internationalizeButton).prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedWelcome);
		
		HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
		HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$("#topContacts").append(HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLlocation);
		$("#footerContacts").append(HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLlocation);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var singleItem="";
			for (var i = 0; i < bio.skills.length; i++){
				singleItem=HTMLskills.replace("%data%",bio.skills[i])
				$("#skills").append(singleItem);
			}
		}
	}
};

var education = { 
	"schools": [{
		"name": "Institute of Design",
		"location": "Chicago, IL, USA",
		"degree": "BS",
		"majors" : ["Communication Design", "Rhetoric"],
		"url" : "http://id.iit.edu",
		"dates" : "1995-2000"
	}],
	"onlineCourses": [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "udacity",
		"dates" : "2014 - 2015",
		"url" : "https://www.udacity.com/course/nd001"
	}],

	display: function(){
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
};

var work = {

	"jobs" : [
	{
		"employer":"Lincoln Park Zoo",
		"title":"Internet Technology Manager",
		"location":"Lincoln Park Zoo",
		"dates":"2005-2015",
		"description":"Internet technology manager, Photographer, Front-end Developer, Typographer, Graphic Designer."
	}, 
	{
		"employer":"Firehaus Design",
		"title":"Manager",
		"location":"4229 N. Lincoln, Chicago, Illinois, USA",
		"dates":"1998-2004",
		"description":"Assisted in managing a small design firm specializing in non-profit educational design."
	}],

	display: function(){
		for (job in work.jobs){
			var singleEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var singleTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var singleDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var singleLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var singleDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(singleEmployer + singleTitle).append(singleDescription).append(singleDates + " " + singleLocation);
		}
	}
};

var projects = {

	"projects" : [
	{
		"title":"Website",
		"dates":"2004-2015",
		"description":"Imagine all of the people.",
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	},
	{
		"title":"Brochure",
		"dates":"2014-2016",
		"description":"Whelming. Take a look at this.",
		"images" : ["images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg"]
	}],
	display: function(){
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			console.log(projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};


// Add the Google Map
$("#mapDiv").append(googleMap);


// Internationalize Toggle Function & variable
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


// Display the JSONs
projects.display();
bio.display();
education.display();
work.display();