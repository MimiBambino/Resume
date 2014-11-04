var work = {
  "jobs": [
  {
    "job": "lawyer",
    "employer": "Case, Lombardi &amp; Pettit",
    "title": "Attorney",
    "location": "Honolulu, Hawaii",
    "dates": "2008 - 2010",
    "description": "I began my legal career as a bankruptcy and business litigation attorney during the Summer of 2008. About 2 months after I began my career, the financial crisis hit. As a result, I was quickly indoctrinated in the inner workings of business reorganization, corporate board restructuring, and corporate finance as I advised and represented business clients on their rights under federal bankruptcy law as corporate creditors."
  },
  {
    "job": "navy",
    "employer": "United States Navy",
    "title": "Naval Officer",
    "location": "Norfolk, Virginia",
    "dates": "2001 - 2005",
    "description": "As a U.S. Navy Surface Warfare Officer onboard a Guided Missile Destroyer I supervised and trained a division of 20 Sailors. Additionally, I oversaw the maintenance and use of all onboard missile launching system hardware (including missiles) and installation and use of all system software.  I served in the Arabian Gulf, Indian Ocean, Mediterranean Sea and the North Sea."
  }
  ],
    "display": function() {
      for (i in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var job = work.jobs[i];
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
  
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedjobLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedjobLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

var projects = {
    "project": [
        {
            "title": "Etch-A-Sketch",
            "dates": "2014",
            "description": "Draw your design on the gray box then resize the pixels in the box!",
            "images": "images/Etch-A-Sketch.png", 
            "url": "http://github.com/MimiBambino/Etch-A-Sketch/",
            "demo": "http://mimibambino.github.io/Etch-A-Sketch/"
        },
        {
            "title": "Interactive Resume",
            "dates": "2014",
            "description": "A resume build with JavaScript, jQuery and Bootstrap.",
            "images": "images/IR.jpg",
            "url": "http://github.com/MimiBambino/InteractiveResume/",
            "demo": "http://mimibambino.github.io/InteractiveResume/"
        },
        {
            "title": "Custom Meme Maker",
            "dates": "2014",
            "description": "Create your own meme and save it to your computer.",
            "images": "images/johnnyMeme.png",
            "url": "https://github.com/MimiBambino/MemeMaker",
            "demo": "http://mimibambino.github.io/MemeMaker/"
        } ],
        "display": function () {
          for (i in projects.project) {
            $("#projects").append(HTMLprojectStart);
            var project = projects.project[i];
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace('%url%', project.url);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images).replace('%demo%', project.demo);
            $(".project-entry:last").append(formattedProjectImage);
          }
        }
};

  var education = {
  "schools": [
    {
    "name": "University of Florida",
    "location": "Gainesville, Florida",
    "degree": "Juris Doctor", 
    "major": "Law",
    "dates": "2005 &#151; 2008",
    "url": "http://www.law.ufl.edu/"
    },
    {
    "name": "Florida State University",
    "location": "Tallahassee, Florida",
    "degree": "Bachelor of Arts",
    "major": "Music",
    "dates": "1996 &#151; 2000",
    "url": "http://www.music.fsu.edu//"
    }
  ],
  "onlineCourses": [
    {
    "title": "Front End Developer Nanodegree",
    "school": "Udacity",
    "dates": 2014,
    "url": "http://www.udacity.com",
    "certificate": ""
    },
    {
    "title": "Introduction to Linux",
    "school": "edX",
    "dates": 2014,
    "url": "https://courses.edx.org/courses/LinuxFoundationX/LFS101x/2T2014/info",
    "certificate": "images/IntroToLinuxCertificate.pdf"
    },
    {
    "title": "Engineering Software as a Service",
    "school": "edX",
    "dates": 2014,
    "url": "https://courses.edx.org/courses/BerkeleyX/CS_CS169.1x/1T2014/info",
    "certificate": "images/SaasCertificate.pdf"
    }
  ],
  "display": function(){

    // Display Schools
     for (i in education.schools) {
     $("#education").append(HTMLschoolStart);
     var school = education.schools[i];
     var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
     $(".education-entry:last").append(formattedschoolName);
     var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
     $(".education-entry:last").append(formattedschoolDegree);
     var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
     $(".education-entry:last").append(formattedschoolDates);
     var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.major);
     $(".education-entry:last").append(formattedschoolMajor);
     var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
     $(".education-entry:last").append(formattedschoolLocation);
    }

    // Display Online Courses
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var i in education.onlineCourses) {
      var course = education.onlineCourses[i];
      var formattedonlineTitle =  HTMLonlineTitle.replace("%data%", course.title).replace("%url%", course.url);
      $(".education-entry:last").append(formattedonlineTitle);
      var formattedonlineSchool =  HTMLonlineSchool.replace("%data%", course.school);
      $(".education-entry:last").append(formattedonlineSchool);
      var formattedonlineDates =  HTMLonlineDates.replace("%data%", course.dates);
      $(".education-entry:last").append(formattedonlineDates);
      if (course.certificate){
        var formattedCertificate =  HTMLonlineCertificate.replace("%certificate%", course.certificate);
        $(".education-entry:last").append(formattedCertificate);
      }
    }
  }
};

var bio = {
  "name": "Cynthia O'Donnell",
  "role": "Front End Web Developer",
  "aboutDeveloper": "Why become a Front End Web Developer?  Well, I've loved the internet since I first experienced it in the 90s. It felt like I suddenly had access to all of the information I could have ever wanted.  Twenty years later, it's even more true. However, I have been growing increasingly critical about how that information is organized.  I started learning about computer programming and web development because I wanted to help make the information already available online more useful by building web applications that find and display data in a more user-friendly way.",
  "aboutMimi": "What is MimiBambino? It makes me smile. When my son was a baby, he called me Mimi. So for a few years, I <em>was</em> Mimi. He was the <em>bambino</em>. Now no one calls me Mimi and he is no longer a baby. To my delight, when I started creating handles and user accounts, I found that MimiBambino was always available. MimiBambino reminds me of that sweet, tender time when for most of the day it was just me and my baby.",
    "languages" : [
          "English",
          "German"
    ],
  "contacts": [
    {
    "website" : "www.mimibambino.com", 
    "email" : "mimibambino@gmail.com",
    "twitter" : "@mimibambino",
    "github" : "MimiBambino",
    "linkedin" : "Cynthia O'Donnell",
    "location" : "Pozzuoli, Italy"
  }
  ],
  "skills": ["css", "php", "html5", "python", "javascript", "business law", "management", "paper airplanes"], 
  "image": "images/Cynthia.jpg",
  "display": function() {
    // Display Skills
    $("#skillsChart").append(HTMLskillsStart);
    for (var i in bio.skills){
      var skill = bio.skills[i];
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    }
    $("#skills").append(HTMLskillsEnd);

    // Display About Me
    var formattedDeveloper = HTMLwelcome.replace("%data%", bio.aboutDeveloper);
    $("#welcome").append(formattedDeveloper);
    var formattedMimi = HTMLwelcome.replace("%data%", bio.aboutMimi);
    $("#welcome").append(formattedMimi);

    // Display Picture
    var formattedPicture = HTMLbioPic.replace("%data%", bio.image);
    $("#Pic").append(formattedPicture);

    // Display Header
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#logo-header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#logo-header").append(formattedRole);

    // Display Contacts
    for (var i in bio.contacts){
      var contact = bio.contacts[i];
      var formattedWebsite = contactWebsite.replace("%data%", contact["website"]).replace("%data%", contact["website"]);
      $("#Contacts").append(formattedWebsite);
      var formattedEmail = contactEmail.replace("%data%", contact["email"]).replace("%data%", contact["email"]);
      $("#Contacts").append(formattedEmail);
      var formattedTwitter = contactTwitter.replace("%data%", contact["twitter"]);
      $("#Contacts").append(formattedTwitter);
      var formattedGithub = contactGithub.replace("%data%", contact["github"]).replace("%data%", contact["github"]);
      $("#Contacts").append(formattedGithub);
      var formattedLinkedIn = contactLinkedIn.replace("%data%", contact["linkedin"]);
      $("#Contacts").append(formattedLinkedIn);
      var formattedLocation = contactLocation.replace("%data%", contact["location"]);
      $("#Contacts").append(formattedLocation);

    // Display Languages
    var formattedLanguage = HTMLlanguage.replace("%data%", bio.languages[0]);
    $("#languages").append(formattedLanguage);
    formattedLanguage = HTMLlanguage.replace("%data%", bio.languages[1]);
    $("#languages").append(formattedLanguage);
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();

//Map

  $("#mapDiv").append(googleMap);
  
  var map;   


  function initializeMap() {

   var locations;        

   var mapOptions = {
   zoomControl: true,
   disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {
       var locations = [];

      for (var biolocation in bio.contacts) {
      locations.push(bio.contacts[biolocation].location);
    }

    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  };

  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
      });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  };

 callback = function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  };

  function pinPoster(locations) {

    var service = new google.maps.places.PlacesService(map);
    for (place in locations) {

      var request = {
        query: locations[place]
      }

      service.textSearch(request, callback);
    }
  };

  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);
  
};

window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {

map.fitBounds(mapBounds);
});
