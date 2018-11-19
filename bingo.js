var goals = 
	["Hi who just joined?"
	, "Can you email that to everyone?"
	, "_____, are you there?"
	, "_____, uh, you're still sharing"
	, "Hey, guys, I have to jump to another call"
	, "Loud typing"
	, "Loud, painful echo/feedback"
	, "Child/animal noises"
	, "Hi, can you hear me?"
	, "No, it's still loading"
	, "Next slide, please"
	, "Can everyone go on mute?"
	, "I'm sorry, I was on mute"
	, "(For overtalkers) Sorry, go ahead"
	, "Hello? Hello?"
	, "Sound fades/cuts out"
	, "Sorry I'm late (insert lame excuse)"
	, "I have a hard stop at..."
	, "I'm sorry, you cut out there"
	, "Can we take this offline?"
	, "I'll have to get back to you"
	, "Can everyone see my screen?"
	, "Sorry, I was having connection issues"
	, "I think there's a lag"
	, "Sorry, didn't catch that, can you repeat?"
	
	// new ones below:
	, "Oops, I'm in the wrong instance"
	, "Banter before the meeting starts"
	
	]
	
	
var demoGoals = 
	["Oops, I'm in the wrong instance"
	];
	
var slideGoals =
	["_____, uh, you're still sharing"
	];
	
var allSpeakGoals =
	["Hi who just joined?"
	, "Can you email that to everyone?"
	, "_____, are you there?"
	, "_____, uh, you're still sharing"
	, "Hey, guys, I have to jump to another call"
	, "Loud typing"
	, "Loud, painful echo/feedback"
	, "Child/animal noises"
	, "Hi, can you hear me?"
	, "No, it's still loading"
	, "Can everyone go on mute?"
	, "I'm sorry, I was on mute"
	, "(For overtalkers) Sorry, go ahead"
	, "Hello? Hello?"
	, "Sound fades/cuts out"
	, "Sorry I'm late (insert lame excuse)"
	, "I have a hard stop at..."
	, "I'm sorry, you cut out there"
	, "Can we take this offline?"
	, "I'll have to get back to you"
	, "Can everyone see my screen?"
	, "Sorry, I was having connection issues"
	, "I think there's a lag"
	, "Sorry, didn't catch that, can you repeat?"
	, "Next slide, please"
	];
	
/*

	idea: split up goals into different arrays that can be added to the list by checking checkboxes
	ex. arrays - normal, demo, slides, multiple speakers, etc.
	if meeting is a global all hands, can uncheck "demo" and "multiple speakers" to eliminate a big chunk of them

*/

// create a copy of all goals
var availableGoals = goals.slice();
var redDead = [];
	
$("#content4").hide();
$("#content3").hide();
$("#settingsContainer").hide();
	
function newCard(size) {
	
	//Starting loop through each square card
	for(var i=0; i < size*size; i++) {  //<--always this code for loops. change in red
		setSquare(i, size);
	}
	
	redDead = [];

}

function initializeGoals() {
	
}


function setSquare(thisSquare, size) {
	
	// name of the square's ID
	//var currSquare = size+"square"+thisSquare;
	var currSquare = size+"square"+thisSquare;
	
	// pick a random goal from the list of random goals
	newGoalIndex = Math.floor(Math.random() * availableGoals.length)
	newGoal = availableGoals[newGoalIndex];

	// add the goal to the cell
	document.getElementById(currSquare).innerHTML = newGoal;
	
	// remove goal from the list of available goals
	availableGoals.splice(newGoalIndex, 1);
	
	// if the square was marked from a previous round, unmark it
	if($("#"+currSquare).hasClass("marked")) {
		$("#"+currSquare).removeClass("marked");
	} 
}

function anotherCard(size) {
	
	// reset the copy of available goals
	availableGoals = goals.slice();

	if ($("#demoGoals").hasClass("marked")) {
		redDead.push.apply(redDead, demoGoals);
	}
	if ($("#slideGoals").hasClass("marked")) {
		redDead.push.apply(redDead, slideGoals);
	}
	if ($("#allSpeakGoals").hasClass("marked")) {
		redDead.push.apply(redDead, allSpeakGoals);
	}
	
	availableGoals = redDead.slice();
	
	// generate a new card
	newCard(size);
	
	if (size == 3) {
		$("#content3").show();	
		$("#content4").hide();
		$("#content5").hide();
		$("#4x4").removeClass("marked");
		$("#5x5").removeClass("marked");
	} else if (size == 4) {
		$("#content3").hide();	
		$("#content4").show();
		$("#content5").hide();
		$("#3x3").removeClass("marked");
		$("#5x5").removeClass("marked");
	} else if (size == 5) {
		$("#content3").hide();	
		$("#content4").hide();
		$("#content5").show();
		$("#3x3").removeClass("marked");
		$("#4x4").removeClass("marked");
	}
		
		
}

// toggle "marked" class to any clicked cell
$('td').mousedown(function() {
	
	
	if ($(this).hasClass("marked")) {
		if ((!$(this).closest("#gameSelect").length) && (!$(this).closest("#play").length)) {
			$(this).removeClass("marked");
		}
	} else {
		
		if ($(this).closest("#gameSelect").length) {
			$("#gameSelect").find('td').each (function(column, td) {
				$(td).removeClass("marked");
			});
		}
		$(this).addClass("marked");
	}
		
});

$('#curtain').mousedown(function() {
	
	$("#settingsContainer").hide();
	$("#settingsButtonButton").removeClass("marked");
	
});

$('#settingsButtonButton').mousedown(function() {
	
	$("#settingsContainer").show();
	
});

$('#playButton').mousedown(function() {
	
	if ($("#3x3").hasClass("marked")) {
		anotherCard(3);
	} else if ($("#4x4").hasClass("marked")) {
		anotherCard(4);
	} else if ($("#5x5").hasClass("marked")) {
		anotherCard(5);
	}
	
	$('#playButton').removeClass("marked");
	$("#settingsContainer").hide();
	$("#settingsButtonButton").removeClass("marked");
	
	
});










