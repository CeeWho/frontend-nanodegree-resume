/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //JSON data

var bio = {
	"name": "Calvin Hu",
	"role": "Video Producer/Director/Editor",
	"welcomeMessage": "Welcome to my resume website!",
	"contacts": {
		"mobile": "8609127249",
		"email": "calvinlhu@gmail.com",
		"location": "SF Bay Area, CA",
		"github": "Coming Soon!"
	},
	"skills": ["Editing", "Directing", "Producing", "Interviewing", "Research", "Videography"],
	"biopic": "images/fry.jpg"
};

var work = {"jobs": [
	{
		"company": "Udacity",
		"title": "Video Producer",
		"dates": "April 2015 - Present",
		"location": "Mountain View, CA",
		"description": "Created marketing videos"
	}, {
		"company": "Udacity",
		"title": "Video Production Lead",
		"dates": "March 2012 - April 2015",
		"location": "Mountain View, CA",
		"description": "Created courses"
	}, {
		"company": "Stanford University",
		"title": "Research Assistant",
		"dates": "July 2011 - April 2012",
		"location": "Palo Alto, CA",
		"description": "Studied force spectroscopy with Cell-Penetrating Peptide functionalized atomic force microscopy"
	}
]};

var projects = [
	{
		"title": "A Story or Two [Working Title]",
		"dates": "June 2015",
		"description": "Worked as an Assistant Director for this short about a couple and a first date at a restaurant.",
		"images": [
			"images/storyor2.jpg","images/storyor2-2.jpg"
		]
	}, {
		"title": "Meeting What's His Face",
		"dates": "April 2015",
		"description": "Worked as the production designer for this comedy short about a woman who finds a man stuck in a ceiling and helps him out, literally.",
		"images": [
			"images/mwhf.jpg"
		]
	}, {
		"title": "Forests of Cumbria",
		"dates": "February - March 2015",
		"description": "Worked as a grip for the production of this darkly comedic medieval period piece.",
		"images": [
			"images/forests.jpg"
		],
		"url":"https://www.facebook.com/theforestsofcumbria/"

	}, {
		"title": "VexX - Red Lights",
		"dates": "October 2013",
		"description": "Worked as an extra and first unit assistant director on this surreal music video.",
		"images": [
			"images/vexx.jpg"
		],
		"url":"https://www.youtube.com/watch?v=lQ3O28PV-rI"
	}
];

var education = {
	"schools": [
		{
			"name": "Stanford University",
			"location": "Palo Alto, CA",
			"degree": "Masters of Science",
			"majors": ["Biophysical Chemistry"],
			"dates": "September 2010 - April 2012",
			"url": "http://www.stanford.edu"
		}, {
			"name": "Emory University",
			"location": "Atlanta, GA",
			"degree": "Bachelors of Science",
			"majors": ["Chemistry", "Film Studies"],
			"dates": "September 2006 - May 2010",
			"url": "http://www.emory.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Development Nanodegree",
			"school": "Udacity",
			"dates": "June 2015 - Present",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}, {
			"title": "Beginner Ruby Nanodegree",
			"school": "Udacity",
			"dates": "February 2016 - Present",
			"url": "https://www.udacity.com/"
		}
	]
};

//Display functions:
bio.display = function (){
	var headerName = HTMLheaderName.replace("%data%", bio.name);
	var headerRole = HTMLheaderRole.replace("%data%", bio.role);
	var contactInfo = HTMLcontactGeneric.replace("%contact%", "Contact info:");


	function contactStr(allContact) {
		var location = HTMLlocation.replace("%data%", allContact.location);
		var mobile = HTMLmobile.replace("%data%", allContact.mobile);
		var email = HTMLemail.replace("%data%", allContact.email);
		var github = HTMLgithub.replace("%data%", allContact.github);
		return location+mobile+email+github;
	}
	var contactInfo = contactInfo.replace("%data%", contactStr(bio.contacts));
	var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

/*	function displaySkill(skillName) {
		var HTMLskillStr = HTMLskills.replace("%data%",skillName)
		return HTMLskillStr;
	}*/

	var allSkills = "";
	bio.skills.forEach(function(skill) {
		allSkills += HTMLskills.replace("%data%",skill);

	});
	$('#header').append(headerName);
	$('#header').append(headerRole);
	$('#header').append(bioPic);
	$('#header').append(welcomeMessage);
	$('#header').append(HTMLskillsStart);
	$("#skills").append(allSkills);
	$('#topContacts').append(contactInfo);
}

work.display = function(){
	function getWorkEntry(workObj) {
		var workName = HTMLworkEmployer.replace("%data%",workObj.company);
		var workTitle = HTMLworkTitle.replace("%data%", workObj.title);
		var workDates = HTMLworkDates.replace("%data%", workObj.dates);
		var workLoc = HTMLworkLocation.replace("%data%", workObj.location);
		var workDesc = HTMLworkDescription.replace("%data%", workObj.description);
		var HTMLworkData = workName + workTitle + workDates + workLoc + workDesc;
		return HTMLworkData;
	}


	work.jobs.forEach(function(workEntry) {
		
		var HTMLworkEntry = getWorkEntry(workEntry);
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(HTMLworkEntry);
	});
}

projects.display = function(){
	function getProjEntry(projObj) {
		var projectTitle = HTMLprojectTitle.replace("%data%", projObj.title);
		if(projObj.url) {
			projectTitle = projectTitle.replace("#", projObj.url);
		} else {
			projectTitle = projectTitle.replace("#", '#projects');
		}
		var projectDates = HTMLprojectDates.replace("%data%", projObj.dates);
		var projectDesc = HTMLprojectDescription.replace("%data%", projObj.description);
		var projectImgs = "";
		projObj.images.forEach(function(imgURL) {
			projectImgs += HTMLprojectImage.replace("%data%",imgURL);
		});
		var HTMLprojData = projectTitle + projectDates + projectDesc + projectImgs;
		return HTMLprojData;
	}


	projects.forEach(function(projEntry) {
		
		var HTMLprojEntry = getProjEntry(projEntry);
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(HTMLprojEntry);
	});
}	

education.display = function () {
	education.schools.forEach(function(school) {
		var schoolName = HTMLschoolName.replace("%data%", school.name);
		if (school.url) {
			schoolName = schoolName.replace("#", school.url);
		} else {
			schoolName = schoolName.replace("#", '#education');
		}
		var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
		var schoolMajors = "";
		school.majors.forEach(function(major){schoolMajors += " "+ major;});
		schoolMajors = HTMLschoolMajor.replace("%data%", schoolMajors);
		var HTMLschoolEntry = schoolName + schoolDegree + schoolDates + schoolMajors;

		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(HTMLschoolEntry);

	});

	$('#education').append(HTMLonlineClasses);

	education.onlineCourses.forEach(function(course) {
		var courseTitle = HTMLonlineTitle.replace("%data%", course.title);
		var courseSchool = HTMLonlineSchool.replace("%data%", course.school);
		var courseDates = HTMLonlineDates.replace("%data%", course.dates);
		var courseURL = HTMLonlineURL.replace(/%data%|#/g, course.url);
		var HTMLcourseEntry = courseTitle + courseSchool + courseDates + courseURL;
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(HTMLcourseEntry);
	});
}

bio.display();

work.display();

projects.display();

education.display();

$('#mapDiv').append(googleMap);






