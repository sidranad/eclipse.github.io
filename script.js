const quizContainer = document.querySelector(".quizContainer"); // Corrected selector
const quizQuestions = document.querySelector(".quizQuestions");
const questionChoices = document.querySelector(".questionChoices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const  startBtn = document.querySelector(".startBtn");
const  setTimer = document.querySelector(".setTimer");




const game = [
    // Your game data...
    {//1
        quizQuestions:"Q. What is an eclipse?",
        questionChoices :["When the Moon disappears at night.","When the Earth blocks the Sun's light",
        "When the Sun, Earth, and Moon align in space.","When the stars twinkle in the sky."],
        answer:"When the Sun, Earth, and Moon align in space."

    },
    {//2
        quizQuestions:"Q. What causes a solar eclipse?",
        questionChoices :["The Moon comes between the Earth and the Sun.","The Sun moves behind the Moon.",
        "The Earth moves between the Moon and the Sun."," The Moon disappears during the day."],
        answer:"The Moon comes between the Earth and the Sun."

    },
    {//3
        quizQuestions:"Q. During a solar eclipse, which part of the Sun is visible around the Moon?",
        questionChoices :["The entire Sun is visible.","The Sun's outer atmosphere (corona).",
        " The Sun's core."," None of the Sun is visible."],
        answer:"The Sun's outer atmosphere (corona)."

    },
    {//4
        quizQuestions:"Q.  What do we call it when the Moon moves in front of the Sun, but it doesn't cover it completely?",
        questionChoices :["Total solar eclipse.","  Partial solar eclipse.",
        "Lunar eclipse.","Nocturnal eclipse."],
        answer:"Partial solar eclipse."
       

    },
    {//5
        quizQuestions:"Q.  When does a lunar eclipse occur?",
        questionChoices :["When the Earth comes between the Sun and the Moon."," When the Moon comes between the Earth and the Sun.",
        "During the day.","During a thunderstorm."],
        answer:" When the Earth comes between the Sun and the Moon."

    },
    {//6
        quizQuestions:"Q. Why don't we have an eclipse every month?",
        questionChoices :["Eclipses only happen on special holidays.","The Moon's orbit is tilted, so it doesn't always line up perfectly.",
        "Eclipses are rare, so they don't occur frequently.","The Sun is too bright for eclipses to happen often."],
        answer:"The Moon's orbit is tilted, so it doesn't always line up perfectly."

    },
     {//7
        quizQuestions:"Q. What's the difference between a solar and a lunar eclipse?",
        questionChoices :["Solar eclipses happen during the day, lunar eclipses at night.","Solar eclipses involve the Sun, lunar eclipses involve the Moon.",
        "Solar eclipses are more common.","There is no difference; they're the same thing."],
        answer:" Solar eclipses involve the Sun, lunar eclipses involve the Moon."

    },
     {//8
        quizQuestions:"Q.  During a total solar eclipse, what can you see in the sky besides the Moon?",
        questionChoices :["Stars and planets."," A rainbow.",
       " Aliens from another galaxy.","Nothing else."],
        answer:"Stars and planets."
    },
     {//9
        quizQuestions:"Q. The following shows a eclipse happening☀️🌑🌎?",
        questionChoices :[" Solar."," Lunar.",
        "Complete .","Partial."],
        answer:"Solar."

    },
     {//10
        quizQuestions:"Q.What is the best way to look at a solar eclipse?",
        questionChoices :["Stare directly at it."," Look at it using dark sun glasses.",
        "Look at it using sunglasses and quickly look away.", "Use a pinhole camera and look at its imagen."],
        answer:"Use a pinhole camera and look at its imagen."

    },

];
//array+obj
let questionIndex = 0;
let score=0;
let gameover=false;
let time=10;

const showQuestions = () => {
    const qDetails = game[questionIndex];
    quizQuestions.textContent = qDetails.quizQuestions;

    // Clear previous choices
    questionChoices.innerHTML = "";

    for (let i = 0; i < qDetails.questionChoices.length; i++) {
        const currentChoice = qDetails.questionChoices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.classList.add("Choices");
        choiceDiv.textContent = currentChoice;
        questionChoices.appendChild(choiceDiv);

        choiceDiv.addEventListener('click' , ()=>{
            if(choiceDiv.classList.contains('selected')){
                choiceDiv.classList.remove('selected');
            }
            else{
                choiceDiv.classList.add('selected'); 
            }
        });
    }
    //if(questionIndex < game.length){
      //  startingTime(); 
    //}
}
//f(check answer)
const checkAnswer=()=>{
    const selectedChoice =document.querySelector('.Choices.selected');
    if(selectedChoice.textContent===game[questionIndex].answer){
        //alert("correct");
        displayAlert("correct");
        score++;
    }
    else{
        //alert("wrong")
        displayAlert(`wrong! ${game[questionIndex].answer} is the correct Answer`);
    }
    questionIndex++;
    if (questionIndex < game.length ) {
        showQuestions();
    } 
    else{
        showScore();
        gameover= true;
    }
}
//f(show score)
const showScore =()=>{
    quizQuestions.textContent="";
    questionChoices.textContent="";
    scoreCard.textContent=`you scored ${score} out of ${game.length}`;
    displayAlert("you have completed this game");
    nextBtn.textContent="Play Again";
}
//f(display alert)
const displayAlert=(msg)=>{
    alert.style.display ="Block";
        alert.textContent =msg;
    setTimeout(()=>{
        
        alert.style.display ="none";
    },2000);
    
}
//f(timer)
const startingTime = () => {
    const count = () => {
        setTimer.textContent = time; // Update the timer display
        if (time <= 0) {
            // Call a function to handle what happens when time runs out
            handleTimeOut();
        } else {
            time--; // Decrement the time by 1
            setTimeout(count, 1000); // Schedule the next update after 1 second
        }
    };

    // Call count function immediately to set the initial value
    count();
};

// Call startingTime when you click the "start" button
startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestions();

    // Reset the timer to 10 seconds before starting it
    time = 10;

    startingTime(); // Start the timer
});

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.Choices.selected');
    if(!selectedChoice && nextBtn.textContent==="Next"){
        //alert("select correct ans");
        displayAlert("select your answer");
        return;
    }
    if (gameover){
        nextBtn.textContent="Next";
        scoreCard.textContent="";
        questionIndex=0;
        showQuestions();
        gameover=false;
        score=0;
    }
    else{
        checkAnswer();
    }
 
});




