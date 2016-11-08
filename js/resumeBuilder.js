// Helper functions
function htmlReplace(htmlStr, data) {
    return htmlStr.replace("%data%", data);
}

function inName(nameStr) {
    var nameArray = nameStr.split(" ");
    nameArray[0] = nameArray[0].toLowerCase();
    nameArray[1] = nameArray[1].toLowerCase();
    nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].slice(1);
    nameArray[1] = nameArray[1].toUpperCase();
    var newStr = nameArray.join(' ');

    return newStr;
}

// Resume builder objects

var bio = {
    name: "Gary Herd",
    role: "Front-End Web Developer",
    contacts: {
        email: "garyherd5@gmail.com",
        mobile: "518-859-1891",
        github: "garyherd",
        twitter: "develprwannabe",
        location: "Houston, TX"
    },
    welcomeMessage: "Hi, I'm a quick learner that gets along with everyone. If you need front-end work done, let's talk",
    biopic: "images/portrait.jpg",
    skills: ["HTML", "CSS", "Javascript", "Python", "Business analysis", "Outside sales"],
    display: function() {
        $("#header").prepend(htmlReplace(HTMLheaderName, this.name));
        $("#name").after(htmlReplace(HTMLheaderRole, this.role));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLemail, this.contacts.email));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLmobile, this.contacts.mobile));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLtwitter, this.contacts.twitter));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLgithub, this.contacts.github));
        $("#topContacts, #footerContacts").append(htmlReplace(HTMLlocation, this.contacts.location));
        $("#header").append(htmlReplace(HTMLbioPic, this.biopic));
        $("#header").append(htmlReplace(HTMLwelcomeMsg, this.welcomeMessage));
        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                $("#skills").append(htmlReplace(HTMLskills, skill));
            });
        }
    }
};

var work = {
    jobs: [{
        employer: "Champion Energy",
        title: "IT Business Analyst",
        location: "Houston, TX",
        dates: "2011-present",
        description: "Elicit and document business requirements for software projects. Create models to further enhance understanding."
    }, {
        employer: "PAETEC Energy",
        title: "Account Executive",
        location: "Albany, NY",
        dates: "2010-2011",
        description: "Develop new business in assigned area by closing electric supply contracts"
    }, {
        employer: "Integrys Energy",
        title: "Account Executive",
        location: "Albany, NY",
        dates: "2005-2010",
        description: "Develop new business in assigned area by closing electric, natural gas, and demand response contracts."
    }],

    display: function() {
        if (this.jobs.length > 0) {
            this.jobs.forEach(function(job) {
                $("#workExperience").append(HTMLworkStart);
                $(".work-entry:last").append(htmlReplace(HTMLworkEmployer, job.employer) + htmlReplace(HTMLworkTitle, job.title));
                $(".work-entry:last").append(htmlReplace(HTMLworkDates, job.dates));
                $(".work-entry:last").append(htmlReplace(HTMLworkLocation, job.location));
                $(".work-entry:last").append(htmlReplace(HTMLworkDescription, job.description));
            });
        }
    }
};


var education = {
    schools: [{
        name: "Rice University",
        location: "Houston, TX",
        degree: "BSEE",
        majors: ["Electrical Engineering"],
        dates: "1993-1996",
        url: "http://www.rice.edu"
    }, {
        name: "Rice University",
        location: "Houston, TX",
        degree: "MBA",
        majors: ["General Management"],
        dates: "2001-2003",
        url: "http://www.rice.edu"
    }],
    onlineCourses: [{
        title: "Introduction to Computer Science and Programming Using Python",
        school: "edX",
        date: "2016",
        url: "http://www.edx.org"
    }, {
        title: "Full Stack Web Development Certificate",
        school: "Free Code Camp",
        date: "2016-2017",
        url: "http://www.freecodecamp.com"
    }],
    display: function() {
        if (this.schools.length > 0) {
            this.schools.forEach(function(school) {
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(htmlReplace(HTMLschoolName, school.name) + htmlReplace(HTMLschoolDegree, school.degree));
                $(".education-entry:last").append(htmlReplace(HTMLschoolDates, school.dates));
                $(".education-entry:last").append(htmlReplace(HTMLschoolLocation, school.location));
                if (school.majors.length > 0) {
                    school.majors.forEach(function(major) {
                        $(".education-entry:last").append(htmlReplace(HTMLschoolMajor, major));
                    });
                }
            });
        }
        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            this.onlineCourses.forEach(function(course) {
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(htmlReplace(HTMLonlineTitle, course.title) + htmlReplace(HTMLonlineSchool, course.school));
                $(".education-entry:last").append(htmlReplace(HTMLonlineDates, course.date));
                $(".education-entry:last").append(htmlReplace(HTMLonlineURL, course.url));
            });
        }
    }
};

var projects = {
    projects: [{
        title: "Rates 2.0 Requirements",
        dates: "Jan 2014 - Nov 2014",
        description: "Created Use Case, SRS, Data Dictionary documents as well as over 30 screen mockups in support of a new Rates application",
        images: ["http://radszuweit.com/wp-content/uploads/2015/05/design-projects.jpg"]
    }, {
        title: "New York Market Launch",
        dates: "Mar 2013 - Nov 2013",
        description: "Project manager for C&I launch in 6 utilities in NY",
        images: ["http://www.unep.org/ietc/portals/136/Images/Project.jpg"]
    }, {
        title: "Maryland Market Launch",
        dates: "Feb 2012 - Sep 2012",
        description: "Project manager for C&I launch in 4 utilities in MD",
        images: ["http://www.silvaaceitunogroup.com/SAG_Diamond/Project-Silva-Aceituno.jpg"]
    }, ],

    display: function() {
        if (this.projects.length > 0) {
            this.projects.forEach(function(project) {
                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(htmlReplace(HTMLprojectTitle, project.title));
                $(".project-entry:last").append(htmlReplace(HTMLprojectDates, project.dates));
                $(".project-entry:last").append(htmlReplace(HTMLprojectDescription, project.description));
                project.images.forEach(function(image) {
                    $(".project-entry:last").append(htmlReplace(HTMLprojectImage, image));
                });
            });
        }
    }
};


// Display objects and add interactivity

bio.display();
work.display();
projects.display();
education.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


