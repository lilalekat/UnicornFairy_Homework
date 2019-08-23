//Trivia Questins, Answers, and Correct Answers//
var triviaQuestions = [
    {
        question: "Where was the Will Smith’s character “born and raised” in The Fresh Prince of Bel-Air?",
        answerChoices: ["South Side of Chicago", "East Compton", "West Philadelphia"],
        correctAnswer: "West Philadelphia"
    },
    {
        question: "What was the name of the pet monkey that Ross had during the early part of the Friends series?",
        answerChoices: ["Maurice", "Marcel", "Martell"],
        correctAnswer: "Marcel"
    },
    {
        question: "What was the name of the main female lead in the TV show, Boy Meets World?",
        answerChoices: ["Topanga", "Winny", "Blossom"],
        correctAnswer: "Topanga"
    },
    {
        question: "What was the quote that everyone seems to remember from Michelle Tanner in Full House?",
        answerChoices: ["You got it, dude.", "Cut. It. Out", "How rude!"],
        correctAnswer: "You got it, dude."
    },
    {
        question: "What was the name of the name of the blonde love interest for Buffy in Buffy the Vampire Slayer?",
        answerChoices: ["Angel", "Xander", "Spike"],
        correctAnswer: "Spike"
    },
    {
        question: "What was the candy that Kramer dropped over the side while watching a medical procedure in Seinfeld?",
        answerChoices: ["Kit Kats", "Milk Duds", "Junior Mints"],
        correctAnswer: "Junior Mints"
    },
    {
        question: "What was the name of the school principle from Saved by the Bell?",
        answerChoices: ["Mr. Belding", "Mr. Belvidere", "Mr. Burns"],
        correctAnswer: "Mr. Belding"
    },
    {
        question: "What was the name of Tim 'The Toolman' Taylor's handyman show from Home Improvement? ",
        answerChoices: ["Tool Time", "Tool Rules", "Tool Tricks"],
        correctAnswer: "Tool Time"
    },
    {
        question: "What was the catchphrase that Steve Urkel was known for in the '90s sitcom, Family Matters?",
        answerChoices: ["What does that mean?", "Did I do that?", "You know I can dig it!"],
        correctAnswer: "Did I do that?"
    },
    {
        question: "What is the name of the '90s sitcom that featured the 'Soup Nazi'?",
        answerChoices: ["Full House", "Twin Peaks", "Seinfeld"],
        correctAnswer: "Seinfeld"
    },
];

//Quiz Begins on Click of the Start Button, this includes functions for removing the Start button, once it has been clicked, and starting the 60 second timer countdown//
$("#startQuizButton").on("click", function () {
    //Removes Start Button After Quiz Has Began//
    $("#startQuizButton").remove();
    console.log("Trivia Game Has Begun");

//Declaration of Variables for the Timer//
    var time = 60
    var x = setInterval(function () {
        time = time - 1;
        $("#timer").text(time);
        if (time === 0) {
            clearInterval(x)
            time = 60
        }
    }, 1000);

    //For Loop that appends Questions and Answer Choices to Radio Buttons//
    for (var i = 0; i < triviaQuestions.length; i++) {
        var questionP = $("<p>");
        questionP.text(triviaQuestions[i].question);
        $("#quizQuestions").append(questionP)
        for (var j = 0; j < triviaQuestions[i].answerChoices.length; j++) {
            $("#quizQuestions").append("<input type='radio' name='question-" + i + "' value='" + triviaQuestions[i].answerChoices[j] + "''>" + triviaQuestions[i].answerChoices[j]);
        }
    }

});


//Countdown function that callsback the gameCountdown function, when timer reaches 0//
// var quizResults = {
//     correct: 0,
//     incorrect: 0,
//     counter: 60,

//     // gameCountdown: function () {
//     //     quizResults.counter--;
//     //     $("#timer").html(triviaGame.counter);
//     //     if (triviaGame.counter === 0) {
//     //         console.log("No More Tick Tock");
//     //         triviaGame.done();
//     //     }
//     // }

// }

//For Each statements that track/tallies correct/incorrect answers for each question//
$.each($("input[name='question-0']:checked"), function () {
    if ($('question-0').val === triviaQuestions[0].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        triviaGame.incorrect++;
    }
});
$.each($("input[name='question-1']:checked"), function () {
    if ($('question-1').val === triviaQuestions[1].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        triviaGame.incorrect++;
    }
});
$.each($("input[name='question-2']:checked"), function () {
    if ($('question-2').val === triviaQuestions[2].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        game.incorrect++;
    }
});
$.each($("input[name='question-3']:checked"), function () {
    if ($('question-3').val === triviaQuestions[3].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        triviaGame.incorrect++;
    }
});
$.each($("input[name='question-4']:checked"), function () {
    if ($('question-4').val === triviaQuestions[4].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        triviaGame.incorrect++;
    }
});
$.each($("input[name='question-5']:checked"), function () {
    if ($('question-5').val === triviaQuestions[5].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        triviaGame.incorrect++;
    }
});
$.each($("input[name='question-6']:checked"), function () {
    if ($('question-6').val === triviaQuestions[6].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        triviaGame.incorrect++;
    }
});
$.each($("input[name='question-7']:checked"), function () {
    if ($('question-7').val === triviaQuestions[7].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        triviaGame.incorrect++;
    }
});
$.each($("input[name='question-8']:checked"), function () {
    if ($('question-8').val === triviaQuestions[8].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        triviaGame.incorrect++;
    }
});
$.each($("input[name='question-9']:checked"), function () {
    if ($('question-9').val === triviaQuestions[9].correctAnswer) {
        triviaGame.correct++;
    }
    else {
        triviaGame.incorrect++;
    }
});
//Callback to submitQuiz function that will clear the quiz questions
submitQuiz();

function submitQuiz() {
    $("#submitQuizButton").on("click", function (event) {
        clearInterval();
        $("#quizQuestions").remove();

        ("#countDown").append("<h2>Out of Time!</h2>");
        ("#quizResults").append("<h3>Guessed Correctly: " + this.correct + "</h3>");
        ("#quizResults").append("<h3>Horribly Guessed: " + this.incorrect + "</h3>");
        ("#quizResults").append("<h3>Didn't Try At All: " + (triviaQuestions.length - (this.incorrect + this.correct)) + "</h3>");
    });
};
//
// $("#submitQuizButton").on("click", function (event) {
    // event.preventDefault();

