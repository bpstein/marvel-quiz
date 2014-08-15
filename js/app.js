$(document).ready(function() {

//QUIZ BEGIN STATE
	console.log("The quiz is about to start");
	$('#start').show();
	$('#questionNumber').hide();
	$('#questionText').hide();
	$('ul').hide();
	$('#next').hide();
	$('#correctAnswer').hide();
	$('#restart').hide();
	$('#score').hide();

// START QUIZ FUNCTIONALITY 
	$('#start').click(function() {
		console.log("User started quiz");
		$('#start').hide();
		$('#questionNumber').show();
		$('#questionText').show();
		$('ul').show();
		$('#next').show();
		$('#correctAnswer').show();
		$('#restart').show();
		$('#score').show();

	});

// // START QUIZ FUNCTIONALITY 
	// $('#start').click(function() {
	// 	console.log("User started quiz");
	// 	$('#start').hide();	
	// 	$('h2').hide();
	// 	$('#submit').show();
	// 	$('#next').hide();
	// 	// $('.main-image').show();
	// 	$('#questionNumber').show();
	// 	$('#question').show();
	// 	$('#question-text').show();
	// 	$('.choice').show();
	// 	$('#score').show();
	// 	$('#tracker').show();



});


	// //DISPLAY MENU BOX OVERLAY
 //  	$('#menu').click(function(){
 //    	$('.overlay').fadeIn(1000);
 //    	console.log("this works!");
 //  	});

 //  	//REMOVE MENU BOX OVERLAY
 //  	$('#got-it').click(function(){
 //  		$('.overlay').fadeOut(500);
 //  		console.log("this works too!")
 //  	});

	// // QUIZ QUESTIONS AND ANSWERS

	// var question = [
	// 	{
	// 		number: "Question 1", 
	// 		questText: "Which character from the Marvel universe is credited with inspiring the appearance of Darth Vader?",
	// 		pic: "images/doctor-doom.jpg",
	// 		answers: ["Iron Man", "Colossus", "Doctor Doom", "Hulk"],
	// 		correct: 2,
	// 		ans: "It's Doctor Doom!",
	// 		factoid: "Additional information goes here.",
	// 	},

	// 	{
	// 		number: "Question 2",
	// 		questText: "Who is considered Central Park's greatest protector?",
	// 		pic: "images/squirrel-girl.jpg",
	// 		answers: ["Spider-Man", "Wolverine", "Squirrel Girl", "Captain America"],
	// 		correct: 2,
	// 		ans: "Surprisingly, it's Squirrel Girl!",
	// 		factoid: "Additional information goes here.",
	// 	},

	// 	{
	// 		number: "Question 3",
	// 		questText: "Which real-life music artist appears as a character in the Marvel universe?",
	// 		pic: "images/eminem.jpg",
	// 		answers: ["Eminem", "Lorde", "Snoop Dog", "Justin Bieber"],
	// 		correct: 0,
	// 		ans: "Eminem! Seriously!",
	// 		factoid: "Additional information goes here.",
	// 	},

	// 	{
	// 		number: "Question 4",
	// 		questText: "Which of Iron Man's gadgets has appeared in comics, but not yet in any Marvel films?",
	// 		pic: "images/ironman.png",
	// 		answers: ["Suit that assembles on command", "Shoulder-mounted guns", "Remote controlled suit", "Roller skates"],
	// 		correct: 3,
	// 		ans: "Roller skates. Really.",
	// 		factoid: "Additional information goes here.",
	// 	},

	// 	{
	// 		number: "Question 5",
	// 		questText: "Which company specializes in cleaning up the mess that superheroes and supervillains leave behind?",
	// 		pic: "images/damage-control.png",
	// 		answers: ["S.H.I.E.L.D.", "Damage Control", "X-Corporation", "Mr Wolf & Co."],
	// 		correct: 1,
	// 		ans: "Damage Control.",
	// 		factoid: "Additional information goes here.",
	// 	},

	// 	{
	// 		number: "Question 6",
	// 		questText: "The character pictured below is known as the Dark Phoenix. What is her alter ego?",
	// 		pic: "images/phoenix.jpg",
	// 		answers: ["Kitty Pryde", "Scott Summers", "Jean Grey", "Mary Jane"],
	// 		correct: 2,
	// 		ans: "Jean Grey.",
	// 		factoid: "Additional information goes here.",
	// 	},

	// 	{
	// 		number: "Question 7",
	// 		questText: "In an alternate reality form of Spider-Man, Peter Parker doesn't turn into Spider-Man. Instead, which of the following superheroes does he become?",
	// 		pic: "images/sheepboy.jpg",
	// 		answers: ["Sheep Boy", "Batman", "Superman", "Ant Man"],
	// 		correct: 0,
	// 		ans: "...Sheep Boy. ",
	// 		factoid: "Additional information goes here.",
	// 	},
	// ];

	// //DECLARE QUIZ VARIABLES
	// var correctAnswer = 0;
	// var end = false; 
	// var answer = 0;
	// var questionNumber = answer + 1;
	// var x;
	

	// // START QUIZ FUNCTIONALITY 
	// $('#start').click(function() {
	// 	console.log("User started quiz");
	// 	$('#start').hide();	
	// 	$('h2').hide();
	// 	$('#submit').show();
	// 	$('#next').hide();
	// 	// $('.main-image').show();
	// 	$('#questionNumber').show();
	// 	$('#question').show();
	// 	$('#question-text').show();
	// 	$('.choice').show();
	// 	$('#score').show();
	// 	$('#tracker').show();
	
	// //ASK NEXT QUESTION
	// 	questionNumber = answer + 1;
	// 	askQuestion();
	// });

	// //CLICK BUTTON TO RESTART QUIZ
	// $('#new').click(function(){
	// 	console.log("Restart the quiz!");
	// 	restartQuiz;
	// 	$('#questionPrompt').text("Would you like to play again?");
	// })

 //  	//SUBMIT ANSWER AND PROGRESS TO NEXT QUESTION
 //  	$('#submit').click(function(){
 //  		console.log("User submitted " + answer);
 //  		$('#next').show();
 //  		$('#submit').hide();
 //  		$('.choice').hide();
 //  		$('#question-text').text(question[answer].ans);
 //  		askQuestion();
 //  	})

 //  	function askQuestion() {
 //  		console.log("Question number " + questionNumber);
 //  		$('#question-text').text(question[answer].questText);
 //  		$('#questionNumber').text(question[answer].number);
 //  		$('#main-image').find('img').attr('src', question.pic);
 //  		$('#choice1').text(question[answer].answers[0]);
 //  		$('#choice2').text(question[answer].answers[1]);
 //  		$('#choice3').text(question[answer].answers[2]);
 //  		$('#choice4').text(question[answer].answers[3]);
  	
 //  	}
 //  	// 	
 //  	// 	
 //  	// 	
 //  	// 	$('#submit').show();
 //  	// 	$('#next').hide();
 //  	// 	  $(":radio").click(function() {
 //   //              $("#submit").prop("disabled",false);
 //   //          });
 //   //          if (questAns === 0) {
 //   //              $("#score").hide();            
 //   //          }
 //   //          else {
 //   //              $("#score").show();
 //   //          }
 //  	// };



	// // //RESTART QUIZ FUNCTIONALITY 
	// // restartQuiz();

	// // function restartQuiz() {
	// // 	finish = false; 
	// // 	questionNumber = 0;
	// // 	correctAnswer = 0;
	// // }











   
    
    
       
    
   

 



