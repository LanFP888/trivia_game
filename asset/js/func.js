function constructAPI_URL(
  gameType,
  questionCategoryID,
  questionDifficulty,
  questionAmount
) {
  //at mininum need amount parameter
  //gameType ("True/False": boolean, "Multiple Choise": multiple)
  //questionAmount (1 to 50)
  //questionDifficulty (easy, medium, hard)
  //format: baseURL?amount&category&difficulty&type
  //the HTML selection value will be the correct value
  var baseURL = "https://opentdb.com/api.php?";
  var newURL;
  var gameTypeParam;
  var questionCategoryParam;
  var questionDifficultyParam;
  var questionAmountParam;
  if (gameType !== undefined) {
    gameTypeParam = "&type=" + gameType;
  } else {
    gameTypeParam = "";
  }
  if (questionCategoryID !== undefined) {
    questionCategoryParam = "&category=" + questionCategoryID;
  } else {
    questionCategoryParam = "";
  }
  if (questionDifficulty !== undefined) {
    questionDifficultyParam = "&difficulty=" + questionDifficulty;
  } else {
    questionDifficultyParam = "";
  }
  if (questionAmount !== undefined) {
    questionAmountParam = "amount=" + questionAmount;
  } else {
    questionAmountParam = "amount=10";
  }

  newURL =
    baseURL +
    questionAmountParam +
    questionCategoryParam +
    questionDifficultyParam +
    gameTypeParam;
  return newURL;
}

//suffles the answer array
function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

//parsing the responseData.results
//format in an array of objects:[{category: "", type: "", difficulty: "", question: "", correct_answer: "", type: "", incorrect_answers: []}]
function triviaQuestionParser(arr) {
  var questionList = [];
  for (var i = 0; i < arr.length; i++) {
    // var newLI = $("<li>");
    // newLI.addClass("results");
    // //need to use .html so the special characters encode correctly
    // newLI.html(arr[i].question);
    // $(".myData").append(newLI);
    // questionList.append(arr[i].quest);
  }
}
