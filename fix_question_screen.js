var inputField = document.getElementsByName(":choice:ci")[0];
inputField.focus();

var answerForm = document.getElementsByName("fm")[0];
var formInputs = answerForm.getElementsByTagName("input");
var checkAnswerButton = null;

for(var i = 0; i < formInputs.length; i++) {
	var formInput = formInputs[i];
	
	if(formInput.value === "Check Answer") {
		checkAnswerButton = formInput;
		break;
	}
}

if(checkAnswerButton != null) {
	checkAnswerButton.type = "submit";
}
