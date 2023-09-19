//TRACK SCORED AND SAVE SCORE.
let correctAnswer = 0

//TIMER:
var timerElement = document.querySelector(".timer-count");
var timerstart = document.querySelector("#timerstart");
var timer;
var timerCount;

// Start timer on page load
// The setTimer function starts and stops the timer
function startTimer() {
    timerCount = 60;
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            alert('Time is up! Game over');
        }
    },1000);

    function deductTime() {
        timerCount -= 10; // deduct 10 seconds
        
        if(timerCount < 0) {
          timerCount = 0;  
        }
        
        timerElement.textContent = timerCount; // update timer display
      };
};

timerstart.addEventListener("click", function() {
    startTimer();
});

// Set check box to checked for Q1:

submit1.addEventListener('click', function(event){
    event.preventDefault()

    let question_checkboxes = document.querySelectorAll('.question1_checkbox')
    console.log(question_checkboxes)
    for(i=0; i<question_checkboxes.length; i++){
        if(question_checkboxes[i].checked === true && question_checkboxes[i].value === "correct"){
            alert("Correct answer")
            //TRACK SCORED AND SAVE SCORE.
            correctAnswer = correctAnswer+1
            alert("Correct answer count " + correctAnswer)
            break;
        }else{
            alert("Incorrect answer")
            deductTime(); // call deductTime function
            break;
        }
    }
});

// Set check box to checked for Q2:

submit2.addEventListener('click', function(event){
    event.preventDefault()

    let question_checkboxes = document.querySelectorAll('.question2_checkbox')
    console.log(question_checkboxes)
    for(i=0; i<question_checkboxes.length; i++){
        console.log(event.target.checked);
        console.log(question_checkboxes[i].checked.value);
        if(question_checkboxes[i].checked === true && question_checkboxes[i].value === "correct"){
            alert("Correct answer")
            //TRACK SCORED AND SAVE SCORE.
            correctAnswer = correctAnswer+1
            alert("Correct answer count " + correctAnswer)
            break;
        }else{
            alert("Incorrect answer")
            deductTime(); // call deductTime function
            break;
        }
    }
});

// Set check box to checked for Q3:
submit3.addEventListener('click', function(event){
    event.preventDefault()

    let question_checkboxes = document.querySelectorAll('.question3_checkbox')
    console.log(question_checkboxes)
    for(i=0; i<question_checkboxes.length; i++){
        if(question_checkboxes[i].checked === true && question_checkboxes[i].value === "correct"){
            alert("Correct answer")
            //TRACK SCORED AND SAVE SCORE.
            correctAnswer = correctAnswer+1
            alert("Correct answer count " + correctAnswer)
            break;
        }else{
            alert("Incorrect answer")
            deductTime(); // call deductTime function
            break;
        }
    }
});

//save players info
var initialsentered = document.getElementById("msg");
var saveb = document.getElementById("saveinitials");

saveb.addEventListener("click", function(event) {
    event.preventDefault();

    var playeroutcome = {
    initials: initialsentered.value,
    score: correctAnswer,
    Comment: initialsentered.value.trim()
    }
});

console.log(correctAnswer);
// Save score 
localStorage.setItem("Correct answer count", JSON.stringify(correctAnswer));
renderMessage();

// Get stored score
function renderMessage() {
    var correctAnswer = JSON.parse(localStorage.getItem("Correct answer count"));
    if (correctAnswer !== null) {
      document.querySelector(".message").textContent = "your score is " + correctAnswer
    }
};