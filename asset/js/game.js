//game type (multiple choice or true/false)
//category (not specified will be any category)
//difficulty
//number of questions(1 to 50) - check the available number of questions based on the category and difficulty to see if there is enough questions for the specified # of questions
//countdown timer for each question
//show correct answer when time runs out
//wait a few seconds then move to the next question
//generate a token for the game session (so it won't have duplicate questions) - good to have?
//parse the question and answers from the response
//plan to catch response_code other than 0 (success)
//end of game, show correct answer count, incorrect count, and option to restart the game without page reload

$(document).ready(function() {
  var gameData;

  $(".getData").on("click", function() {
    var gameType;
    var questionCategoryID;
    var questionDifficulty;
    var questionAmount;
    var URL = constructAPI_URL(
      gameType,
      questionCategoryID,
      questionDifficulty,
      questionAmount
    );
    console.log(URL);
    $.getJSON(URL, function(responseData) {
      //the json data retrived will be converted to an object, which contains (response_code and results)
      //store the responseData object in a new gameData object for the rest of the game
      gameData = responseData;
      console.log(gameData);
      //triviaQuestionParser(gameData.results);
    });
  });

  $(".checkAnswer").on("click", function() {
    var option = $("input:radio:checked", ".triviaOpt").val();
    //if non of the option buttons are checked, option will be undefined
    if (option !== undefined) {
      //need to use .html so the special characters encode correctly
      $(".triviaQuestions").html(option);
    } else {
      $(".triviaQuestions").html("Please make a selection");
    }
  });
});
