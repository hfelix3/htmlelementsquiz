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

// Set check box to checked for Question1:

submit1.addEventListener('click', function(event){
    event.preventDefault()

    let question_checkboxes = document.querySelectorAll('.question1-1_checkbox')
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

// Set check box to checked for Question2:

submit2.addEventListener('click', function(event){
    event.preventDefault()

    let question_checkboxes = document.querySelectorAll('.question2-3_checkbox')
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

// Set check box to checked for Question3:
submit3.addEventListener('click', function(event){
    event.preventDefault()

    let question_checkboxes = document.querySelectorAll('.question3-1_checkbox')
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

//TRACK SCORE AND SAVE SCORE.
var saveinitials = document.querySelector("#saveinitials");
var initialEntered = document.querySelector("#initialEntered");
let correctAnswer = 0;

// renderMessage function 
function renderMessage() {
  let score = Number(correctAnswer);
  document.querySelector(".message").textContent = "Your score is " + score;
}

// Handle form submit
saveinitials.addEventListener("click", function(event) {

  event.preventDefault();

  // Create player outcome object
  let playeroutcome = {
    initials: initialEntered.value,
    score: correctAnswer, 
    comment: initialEntered.value.trim()
  };
  
  // Save player data to localStorage
  localStorage.setItem("playerInfo", JSON.stringify(playeroutcome));

  // Update correctAnswer value
  correctAnswer++;

  // Render message
  renderMessage();
  
  // Save score 
  localStorage.setItem("Correct answer count", JSON.stringify(correctAnswer));
  
});