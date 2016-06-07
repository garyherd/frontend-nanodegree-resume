function htmlReplace(htmlStr, data) {
    return htmlStr.replace("%data%", data);
}

var bio = {
    "name": "Gary Herd",
    "role": "Front-End Web Developer",
    "contacts": {
        "email": "garyherd5@gmail.com",
        "mobile": "518-859-1891",
        "github": "garyherd",
        "twitter": "develprwannabe",
        "location": "Houston, TX"        
    },
    "welcomeMessage": "Hi, I'm a quick learner that gets along with everyone. If you need front-end work done, let's talk",
    "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/04b/0fe/1d37ec5.jpg",
    "skills": ["HTML", "CSS", "Javascript", "Python", "Business analysis", "Outside sales"],
    "display": function() {
        $("#header").prepend(htmlReplace(HTMLheaderName, this.name));
        $("#name").after(htmlReplace(HTMLheaderRole, this.role));
        $("#topContacts").append(htmlReplace(HTMLemail, this.contacts.email));
        $("#topContacts").append(htmlReplace(HTMLmobile, this.contacts.mobile));
        $("#topContacts").append(htmlReplace(HTMLtwitter, this.contacts.twitter));
        $("#topContacts").append(htmlReplace(HTMLgithub, this.contacts.github));
        $("#topContacts").append(htmlReplace(HTMLlocation, this.contacts.location));
        $("#header").append(htmlReplace(HTMLbioPic, this.biopic));
        $("#header").append(htmlReplace(HTMLwelcomeMsg, this.welcomeMessage));
        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill in this.skills) {
                $("#skills").append(htmlReplace(HTMLskills, this.skills[skill]));
            }  
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "Champion Energy",
            "title": "Business Analyst",
            "location": "Houston, TX",
            "dates": "2011-present",
            "description": "Elicit and document business requirements for software projects. Create models to further enhance understanding."
        },
        {
            "employer": "PAETEC Energy",
            "title": "Sales Executive",
            "location": "Albany, NY",
            "dates": "2010-2011",
            "description": "Develop new business in assigned area by closing electric supply contracts"
        },
        {
            "employer": "Integrys Energy",
            "title": "Account Executive",
            "location": "Albany, NY",
            "dates": "2005-2010",
            "description": "Develop new business in assigned area by closing electric, natural gas, and demand response contracts."
        }               
    ],
    
    "display": function() {
        if (this.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
            for (var job in this.jobs) {          
                $(".work-entry:last").append(htmlReplace(HTMLworkEmployer, this.jobs[job].employer) + 
                                                htmlReplace(HTMLworkTitle, this.jobs[job].title));
                $(".work-entry:last").append(htmlReplace(HTMLworkDates, this.jobs[job].dates));
                $(".work-entry:last").append(htmlReplace(HTMLworkLocation, this.jobs[job].location));    
                $(".work-entry:last").append(htmlReplace(HTMLworkDescription, this.jobs[job].description));                                                                  
            }
        } 
    }
};

                            
var education = {
    "schools": [
        {
            "name": "Rice University",
            "location": "Houston, TX",
            "degree": "BSEE",
            "majors": ["Electrical Engineering"],
            "dates" : "1993-1996",
            "url": "http://www.rice.edu"
        },
        {
            "name": "Rice University",
            "location": "Houston, TX",            
            "degree": "MBA",
            "majors": ["General Management"],
            "dates" : "2001-2003",
            "url": "http://www.rice.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Introduction to Computer Science and Programming Using Python",
            "school": "edX",
            "date": "2016",
            "url": "http://www.edx.org"
        },
        {
            "title": "Full Stack Web Development Certificate",
            "school": "Free Code Camp",
            "date": "2016-2017",
            "url": "http://www.freecodecamp.com"
        }
    ],
    "display": function() {
        
    }
}

var projects = {
    "projArray": [
        {
            "title": "Rates 2.0 Requirements",
            "dates": "Jan 2014 - Nov 2014",
            "description": "Created Use Case, SRS, Data Dictionary documents as well as over 30 screen mockups in support of a new Rates application",
            "images": ["http://radszuweit.com/wp-content/uploads/2015/05/design-projects.jpg"]
        },
        {
            "title": "New York Market Launch",
            "dates": "Mar 2013 - Nov 2013",
            "description": "Project manager for C&I launch in 6 utilities in NY",
            "images": ["http://www.unep.org/ietc/portals/136/Images/Project.jpg"]
        },
        {
            "title": "Maryland Market Launch",
            "dates": "Feb 2012 - Sep 2012",
            "description": "Project manager for C&I launch in 4 utilities in MD",
            "images": ["http://www.silvaaceitunogroup.com/SAG_Diamond/Project-Silva-Aceituno.jpg"]
        },                
    ],
    
    "display": function() {
        if (this.projArray.length > 0) {
            $("#projects").append(HTMLprojectStart);
            for (project in this.projArray) {
                $(".project-entry:last").append(htmlReplace(HTMLprojectTitle, this.projArray[project].title));
                $(".project-entry:last").append(htmlReplace(HTMLprojectDates, this.projArray[project].dates));
                $(".project-entry:last").append(htmlReplace(HTMLprojectDescription, this.projArray[project].description));
                for (image in this.projArray[project].images) {
                    $(".project-entry:last").append(htmlReplace(HTMLprojectImage, this.projArray[project].images[image]));
                }                
            }           
        }
    }
}


bio.display();
work.display();
projects.display();
education.display();



$("#main").append(internationalizeButton);

// function inName(nameStr) {
//     var nameArray = nameStr.split(" ");
//     nameArray[0] = nameArray[0].toLowerCase();
//     nameArray[1] = nameArray[1].toLowerCase();
//     nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].slice(1);
//     nameArray[1] = nameArray[1].toUpperCase();   
//     var newStr = nameArray.join(' ');
      
//     return newStr;
// }

$("#mapDiv").append(googleMap);


