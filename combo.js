
document.addEventListener("DOMContentLoaded", function() {
// Alert Questions for the user to determine the secret combination
alert("You will be asked a series of questions to determine the secret combination. Please answer the following questions to the best of your ability.");

// Alert Questions for the user to determine the secret combination
alert( "First Combo: What is 5+5? " + "Input your answer for Code 1");
alert("Second Combo: What is 80 / 2? " + "Input your answer for Code 2");
alert("Third Combo: What is 78 / 2? " + "Input your answer for Code 3");

const code1 = 10;
const code2 = 40;
const code3 = 39;

const form = document.getElementById("codeForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const input1 = document.getElementById("code").value;
    const input2 = document.getElementById("code2").value;
    const input3 = document.getElementById("code3").value;

    if (input1 == code1 && input2 == code2 && input3 == code3) {
        alert("Congratulations! You have successfully opened the vault.");
    } else {
        alert("Sorry, that is not the correct combination. Please try again.");
    }
  });
});
