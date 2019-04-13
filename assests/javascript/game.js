$('#startButton').on("click", function (){
    play.start();
})

$(document).on("click", "#submit", function () {
    play.done();
})

//create array of questions
var questions = [{
    question: "What is Zedd's real name?", //1 
    answers: ["Michael Thivaios ", "Robbert van de corput ", "Anton Zaslavski ", "Tim Bergling "],
    correctAnswer: " Anton Zaslavski "
    }, {
    question: "Who produces the Tomorrowland aftermovie Every Year?", //2 
    answers: ["Final Kid ", "Dimitri Vegas and Like Mike ", "Skrillex ", "ID&T "],
    correctAnswer: " Dimitri Vegas and Like Mike "
    }, {
    question: "Who is the highest paid DJ of 2014?", //3 
    answers: ["Calvin Harris ", "Hardwell ", "David Guetta ", "Kaskade "], 
    correctAnswer: " Calvin Harris "
    }, {
    question: "Who Founded Mad Decent Records", //4
    answers: ["Skrillex ", "Diplo ", "Dillon Francis ", "Steve Aoki "],
    correctAnswer: " Diplo "
    }, {
    question: "What Religion is Kaskade affliated with?", //5 
    answers: ["Mormonism ", "Christianity ", "Buddhism ", "Catholic "],
    correctAnswer: " Mormonism "
    }, {
    question: "In which city did the EDM festival Electric Daisy Carnival first appear?", //6
    answers: ["San Diego ", "San Fransico ", "Las Vegas ", "Los Angeles "],
    correctAnswer: " Los Angeles "
    }, {
    question: "What is the maximum tempo of most trance music?", //7
    answers: ["128bpm ", "140bpm ", "120bpm ", "200bpm "],
    correctAnswer: " 140bpm "
    }, {
    question: "In 2015 about how many people attended the Electric Daisy Carnival?", //8
    answers: ["400,000 ", "500,000 ", "1 Million ", "250,000 "],
    correctAnswer: " 400,000 "
    }, {
    question: "Who almost became one of the swedish house mafia?", //9
    answers: ["Eric Prydz ", "Alesso ", "Avicii ", "Hardwell "],
    correctAnswer: " Eric Prydz "
    }, { 
    question: "Who is the highest paid Dj of 2018?", //10
    answers: ["Kaskade ", "Marshmello ", "Martin Garrix ", "Illenium "],
    correctAnswer: " Marshmello "
    }
    ];

var play = {
   correct: 0,
   incorrect: 0,
   counter: 60,
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
    $("#subWrapper").prepend("<h2>Time Remaining: <span id='counter'>60</span> Seconds</h2>"); 
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
    $.each($("input[name='question-0']:checked"), function(){ //QUESTION 1
    if($(this).val() == questions[0].correctAnswer) {
    play.correct++;
    } else {
    play.incorrect++;
    }
    });
  
    $.each($("input[name='question-1']:checked"), function(){ //QUESTION 2
    if($(this).val() == questions[1].correctAnswer) {
    play.correct++;
    } else {
    play.incorrect++;
    }
    });

    $.each($("input[name='question-2']:checked"), function(){ //QUESTION 3
    if($(this).val() == questions[2].correctAnswer) {
    play.correct++;
    } else {
    play.incorrect++; 
    }
     });
        
$.each($("input[name='question-3']:checked"), function(){ //QUESTION 4
if($(this).val() == questions[3].correctAnswer) {
 play.correct++;
  } else {
 play.incorrect++;
 }
});

$.each($("input[name='question-4']:checked"), function(){ //QUESTION 5
if($(this).val() == questions[4].correctAnswer) {
 play.correct++;
 } else {
play.incorrect++; 
 }
});

 $.each($("input[name='question-5']:checked"), function(){ //QUESTION 6
  if($(this).val() == questions[5].correctAnswer) {
 play.correct++;
 } else {
 play.incorrect++;
 }
 });

 $.each($("input[name='question-6']:checked"), function(){ //QUESTION 7
 if($(this).val() == questions[6].correctAnswer) {
play.correct++;
   } else {
 play.incorrect++;
 }
 });

 $.each($("input[name='question-7']:checked"), function(){ //QUESTION 8
 if($(this).val() == questions[7].correctAnswer) {
play.correct++;
 } else {
   play.incorrect++; 
 }
 });

 $.each($("input[name='question-8']:checked"), function(){ //QUESTION 9
  if($(this).val() == questions[8].correctAnswer) {
 play.correct++;
   } else {
 play.incorrect++;
 }
  });

 $.each($("input[name='question-9']:checked"), function(){ //QUESTION 10
  if($(this).val() == questions[9].correctAnswer) {
  play.correct++;
 } else {
play.incorrect++; 
}       
 });
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