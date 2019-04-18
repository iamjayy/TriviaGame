//function to start jumbotron trivia
$('#startButton').on("click", function (){
    play.start();
})


$(document).on("click", "#submit", function () {
    play.done();
})

//create array of questions
var questions = [{
    question: "What is Zedd's real name?", //1 
    answers: ["Michael Thivaios", "Robbert van de corput", "Anton Zaslavski", "Tim Bergling"],
    correctAnswer: "Anton Zaslavski"
    }, {
    question: "Who produces the Tomorrowland aftermovie Every Year?", //2 
    answers: ["Final Kid", "Dimitri Vegas and Like Mike", "Skrillex", "ID&T"],
    correctAnswer: "Dimitri Vegas and Like Mike"
    }, {
    question: "Who is the highest paid DJ of 2014?", //3 
    answers: ["Calvin Harris", "Hardwell", "David Guetta", "Kaskade"], 
    correctAnswer: "Calvin Harris"
    }, {
    question: "Who Founded Mad Decent Records", //4
    answers: ["Skrillex", "Diplo", "Dillon Francis", "Steve Aoki"],
    correctAnswer: "Diplo"
    }, {
    question: "What Religion is Kaskade affliated with?", //5 
    answers: ["Mormonism", "Christianity", "Buddhism", "Catholic"],
    correctAnswer: "Mormonism"
    }, {
    question: "In which city did the EDM festival Electric Daisy Carnival first appear?", //6
    answers: ["San Diego", "San Fransico", "Las Vegas", "Los Angeles"],
    correctAnswer: "Los Angeles "
    }, {
    question: "What is the maximum tempo of most trance music?", //7
    answers: ["128bpm", "140bpm", "120bpm", "200bpm"],
    correctAnswer: "140bpm"
    }, {
    question: "In 2015 about how many people attended the Electric Daisy Carnival?", //8
    answers: ["400,000", "500,000", "1 Million", "250,000"],
    correctAnswer: "400,000"
    }, {
    question: "Who almost became one of the swedish house mafia?", //9
    answers: ["Eric Prydz", "Alesso", "Avicii", "Hardwell"],
    correctAnswer: "Eric Prydz"
    }, { 
    question: "Who is the highest paid Dj of 2018?", //10
    answers: ["Kaskade", "Marshmello", "Martin Garrix", "Illenium"],
    correctAnswer: "Marshmello"
    }
    ];

var play = {
   correct: 0,
   incorrect: 0,
   counter: 45,
   countdown: function() {
   play.counter--;
    $("#counter").html(play.counter);
    if(play.counter<=0){
    console.log("Time is up");
    play.done();
    }
    },
        
    //timer here countdown
        
  start: function() {
    timer = setInterval(play.countdown, 1000);
    $("#subWrapper").prepend("<h2>Time Remaining: <span id='counter'>45</span> Seconds</h2>"); 
    $("#startButton").remove();
    for (var i=0; i < questions.length; i++) {
    $("#subWrapper").append("<h2>"+questions[i].question+"</h2>");
    for (var j=0; j < questions[i].answers.length; j++) {
    $("#subWrapper").append("<input type='radio' name='question-"+i+"' value='+questions[i].answers[j]+'>"+questions[i].answers[j]);
    }
    }
    $("#subWrapper").append("<br><br><button class='btn btn-warning' id='submit'>SUBMIT</button>");
    }, 
    done: function() {

    //for lop for questions checked
      for(var i = 0; i < questions.length; i++){
        $.each($(`input[name='question-${i}']:checked`), function () { //QUESTION 1
            if ($(this).val() == questions[i].correctAnswer) {
                play.correct++;
            } else {
                play.incorrect++;
            }
        });
    }
    this.result();
    },

// result for answers show correct and incorrect
result: function(){
 clearInterval(timer);
 $("#subWrapper h2").remove();
$("#subWrapper").html("<h2> YOU Finished!!!!!!</h2>");
 $("#subWrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
$("#subWrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
 $("#subWrapper").append("<h3>Questions You Forgot: "+(questions.length-(this.correct+this.incorrect))+"</h3>");
}
};