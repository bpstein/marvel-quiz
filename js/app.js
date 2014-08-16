$(document).ready(function() {

//INTRODUCE QUESTIONS AS OBJECTS

var question = [
	{
		number: "Question 1",
		questionText: "Question question?",
		answers: ["red", "blue", "black", "white"],
		correct: 0,
		ans: "It's red!",
	},

	{
		number: "Question 2",
		questionText: "Question 22?",
		answers: ["red", "purple", "black", "yellow"],
		correct: 3,
		ans: "It's yellow!",
	},

	{
		number: "Question 3",
		questionText: "33 22?",
		answers: ["blue", "purple", "black", "yellow"],
		correct: 2,
		ans: "It's black!",
	},
];

//DECLARE QUIZ VARIABLES
	var correctAnswer = 0;
	var end = false; 
	var answer = 0;
	var questionNumber = answer + 1;
	var x; 

//QUIZ BEGIN STATE
	console.log("The quiz is about to start");
	$('#start').show();
	$('#questionNumber').hide();
	$('#questionText').hide();
	$('ul').hide();
	$('#next').hide();
	$('#correctAnswer').hide();
	$('#submit').hide();
	$('#restart').hide();
	$('#score').hide();

// START QUIZ FUNCTIONALITY 
	$('#start').click(function() {
		console.log("User started quiz");
		$('#start').hide();
		$('#questionNumber').show();
		$('#questionText').show();
		$('ul').show();
		$('#next').hide();
		$('#correctAnswer').show();
		$('#submit').show();
		$('#restart').show();
		$('#score').show();
		askQuestion();
		questNumber = answer+1;
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
  		$(":radio").click(function() {
  			console.log("User selected an answer");
            $("#submit").prop("disabled",false);
            });
            if (answer === 0) {
                $("#score").hide();            
            }
            else {
                $("#score").show();
            }
  	};

  //EVALUATE ANSWER
  	$("body").on('click', '#submit', function() {
        var userGuess = $("input[type='radio']:checked").val();
        $("#submit").hide();
        $("#score").show();
        if (userGuess == question[answer].correct) {
            console.log("userGuess is "+ userGuess);
            console.log("correct");
            $("#correctAnswer").show();
            $("#correctAnswer").text("CORRECT!");
            correctAnswer ++;
            answer++;
            if(answer === 5) {
                $("#score").addClass("final");
               $("#score").text("Your final score is " + correctAnswer +"of" + answer);
               return;
            }
            else {
            $("#next").show();
            $("#score").text("Current score: " + correctAnswer +"of" + answer);
            }
            
        }
        else {
            console.log("user guess is wrong");
            $("#correctAnswer").show();
            $("#correctAnswer").text("WRONG! " + question[answer].correctAnswer);
            answer++;
            $("#score").text("Current score: " + correctAnswer +" out of " + answer);
            if(answer === 5) {
                 $("#score").addClass("final");
               $("#score").text("Your final score is " + correctAnswer +" out of " + answer);
               return;
            }
            $("#next").show();
        }
    });

  	//SUBMIT ANSWER 
	$('#submit').click(function() {
		console.log("User submitted an answer");
		$('#submit').hide();
		$('#next').show();
	});

  	//NEXT QUESTION FUNCTIONALITY
  	$('#next').click(function() {
		console.log("User proceeds to next question");
		questionNumber = answer + 1;
		$("input:checked").removeAttr("checked");
		$('#submit').show();
		$('#next').hide();
		$('#correctAnswer').hide();        
     	askQuestion();
	});

	//RESTART QUIZ FUNCTIONALITY
	$("#new").click(function() {
        console.log("User started a new quiz");
        restartQuiz();
        $("#questionText").text("Want to go another round?");
    });

    function restartQuiz() {
    	correctAnswer = 0;
        end = false;
        questAnswer = 0;
    	$('#start').hide();
		$('#questionNumber').show();
		$('#questionText').show();
		$('ul').show();
		$('#next').hide();
		$('#correctAnswer').show();
		$('#submit').show();
		$('#restart').show();
		$('#score').show();
		askQuestion();
		questNumber = answer+1;
	};

	restartQuiz();
});









   
    
    
       
    
   

 



