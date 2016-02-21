$(document).ready(function() {

	//DISPLAY MENU BOX OVERLAY
	$('#menu').click(function(){
  	$('.overlay').fadeIn(1000);
  	console.log("this works!");
	});

	//REMOVE MENU BOX OVERLAY
	$('#got-it').click(function(){
		$('.overlay').fadeOut(500);
		console.log("this works too!")
	});

	//INTRODUCE QUESTIONS AS OBJECTS
	var question = [
		{
			//QUESTION 1
			number: "Question 1",
			questionText: "Which character from the Marvel universe is credited with inspiring the appearance of Darth Vader?",
			answers: ["Iron Man", "Doctor Doom", "Colossus", "Hulk"],
			correct: 1,
			image: "images/doctor-doom.jpg",
			ans: "Doctor Doom, among other characters, was a key inspiration for Darth Vader.",
		},

		{
			//QUESTION 2
			number: "Question 2",
			questionText: "Who is considered Central Park's greatest protector?",
			answers: ["Spider-Man", "Wolverine", "Squirrel Girl", "Captain America"],
			correct: 2,
			image: "images/squirrel-girl.png",
			ans: "Surprisingly, it's Squirrel Girl!",
		},

		{
			//QUESTION 3
			number: "Question 3",
			questionText: "Which real-life music artist appears as a character in the Marvel universe?",
			answers: ["Eminem", "Lorde", "Snoop Dog", "Justin Bieber"],
			correct: 0,
			image: "images/eminem.jpg",
			ans: "Eminem! Seriously!",
		},

		{
			//QUESTION 4
			number: "Question 4",
			questionText: "Which of Iron Man's gadgets has appeared in comics, but not yet in any Marvel films?",
			answers: ["Suit that assembles on command", "Shoulder-mounted guns", "Remote controlled suit", "Roller skates"],
			correct: 3,
			image: "images/ironman.png",
			ans: "Roller skates. Really.",
		},

		{
			//QUESTION 5
			number: "Question 5",
			questionText: "Which company specializes in cleaning up the mess that superheroes and supervillains leave behind?",
			answers: ["S.H.I.E.L.D.", "Damage Control", "X-Corporation", "Mr Wolf & Co."],
			correct: 1,
			image: "images/damage-control.png",
			ans: "Damage Control.",
		},

		{
			//QUESTION 6
			number: "Question 6",
			questionText: "What is the alter ego of the character known as Dark Phoenix?",
			answers: ["Kitty Pryde", "Scott Summers", "Jean Grey", "Mary Jane Watson"],
			correct: 2,
			image: "images/phoenix.jpg",
			ans: "Jean Grey.",
		},

		{
			//QUESTION 7
			number: "Question 7",
			questionText: "In an alternate reality form of Spider-Man, Peter Parker doesn't turn into Spider-Man. Instead, which of the following superheroes does he become?",
			answers: ["Sheep Boy", "Batman", "Superman", "Ant Man"],
			correct: 0,
			image: "images/sheepboy.jpg",
			ans: "...Sheep Boy.",
		},
	];

	//DECLARE QUIZ VARIABLES
	var correctAnswer = 0;
	var end = false; 
	var answer = 0;
	var questionNumber = answer + 1;
	var x; 

	//QUIZ BEGIN STATE
	$('#start').show();
	$('#questionNumber').hide();
	$('#questionText').hide();
	$('ul').hide();
	$('#choices, #choice1, #choice2, #choice3, #choice4, #1stChoice, #2ndChoice, #3rdChoice, #4thChoice').hide();
	$('#next').hide();
	$('#correctAnswer').hide();
	$('#submit').hide();
	$('#restart').hide();
	$('#score').hide();

	// START QUIZ FUNCTIONALITY 
	$('#start').click(function() {
		console.log("User started quiz");
		$('#start').hide();
		$('h1').hide();
		$('#questionNumber').show();
		$('#questionText').show();
		$('ul').show();
		$('#choices, #choice1, #choice2, #choice3, #choice4, #1stChoice, #2ndChoice, #3rdChoice, #4thChoice').show();
		$('#next').hide();
		$('#correctAnswer').show();
		$('#submit').show();
		$('#score').show();
		askQuestion();
		currentQuestionIndex = 0;
		questNumber = 0;
		questAnswer = 0;

	});

	//INPUTS FOR EACH QUESTIONS AND CHOICES
	function askQuestion() {
  		console.log("Question number " + questionNumber);
  		$('#questionText').text(question[answer].questionText);
  		$('#questionNumber').text(question[answer].number);
  		$('#1stChoice').text(question[answer].answers[0]);
  		$('#2ndChoice').text(question[answer].answers[1]);
  		$('#3rdChoice').text(question[answer].answers[2]);
  		$('#4thChoice').text(question[answer].answers[3]);
  		$('#submit').prop("disabled", true);	
		$(":radio").click(function() {
  			console.log("User selected an answer");
            $("#submit").prop("disabled", false);
            });
            // if (answer === 7) {
            //     $("#score").hide();
            //     $('#score').text("Your final score for the quiz is " + correctAnswer + "/" + questAnswer);        
            // }
            // else {
            //     $("#score").show();
            // }
  	};

  	//EVALUATE ANSWER
  	$("body").on('click', '#submit', function() {
        var userGuess = $("input[type='radio']:checked").val();
        // alert("Question number " + (questionNumber-1));
        var currentQuestionIndex = (questionNumber-1);
        $("#submit").hide();
        $("#score").show();
        if (userGuess == question[answer].correct) {
            console.log("userGuess is "+ userGuess);
            console.log("correct");
            $("#correctAnswer").show();
            $("#correctAnswer").text("CORRECT!");
            $('#correctAnswer').text(question[currentQuestionIndex].ans);
            $('#image-box').find('img').attr('src', question[answer].image);
            $('#img-placeholder').show();
            correctAnswer ++;
            answer ++;
            if(answer === 7) {
               // $("#score").addClass("final");
               $("#score").text("Your final score is " + correctAnswer +" of " + answer);
               $('#restart').show();
               $('#next').hide();
               $('#choices, #choice1, #choice2, #choice3, #choice4, #1stChoice, #2ndChoice, #3rdChoice, #4thChoice').hide();
            }
            else {
            $("#next").show();
            $("#score").text("Current score: " + correctAnswer +" of " + answer);
            }
            
        }
        else {
            console.log("user guess is wrong");
            $('#image-box').find('img').attr('src', question[answer].image);
            $('#img-placeholder').show();
            $("#correctAnswer").show();
            $("#correctAnswer").text("WRONG! " + question[currentQuestionIndex].ans);
            answer++;
            $("#score").text("Current score: " + correctAnswer +" out of " + answer);
            if(answer === 7) {
               $("#score").text("Your final score is " + correctAnswer +" out of " + answer);
               $('#restart').show();
               $('#next').hide();
               $('#restart').on('click', function(){
               		$('#img-placebolder').hide();
               		$('#image-box').hide();
               		$('img').hide();
               })
            }
        }
    });

  	//SUBMIT ANSWER 
	$('#submit').click(function() {
		console.log("User submitted an answer");
		$('#submit').hide();
		$('#next').show();
		$('#choices, #choice1, #choice2, #choice3, #choice4, #1stChoice, #2ndChoice, #3rdChoice, #4thChoice').hide();
		// $(':radio').prop('unchecked');
	});

  	//NEXT QUESTION FUNCTIONALITY
  	$('#next').click(function() {
		console.log("User proceeds to next question");
		questionNumber = answer + 1;
		$("input:checked").removeAttr("checked");
		$('#img-placeholder').hide();
		$('#submit').show();
		$('#next').hide();
		$('#correctAnswer').hide();
		$('#choices, #choice1, #choice2, #choice3, #choice4, #1stChoice, #2ndChoice, #3rdChoice, #4thChoice').show();      
     	askQuestion();
	});

  	// RESTART QUIZ FUNCTION
    function restartQuiz() {
    	// correctAnswer = 0;
     //    end = false;
     //    questAnswer = 0;
     //    questNumber = 0;
		$('#questionNumber').show();
		$('#questionText').show();		
		$('ul').show();
		$('#choices, #choice1, #choice2, #choice3, #choice4, #1stChoice, #2ndChoice, #3rdChoice, #4thChoice').hide();
		$('#next').show();
		$('#correctAnswer').hide();
		$('#submit').show();
		$('#restart').hide();
		$('#score').show();
		$('#correctAnswer').hide();
		$('#img-placeholder').hide();
		askQuestion();
		currentQuestionIndex = 0;
		questNumber = 0;
		questAnswer = 0;
	};

	//RESTART QUIZ FUNCTIONALITY
	$("#restart").on('click', function() {
        console.log("User started a new quiz");
        restartQuiz();
    });
});


    
       
    
   

 



