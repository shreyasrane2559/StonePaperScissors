let userScore = 0; 
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("msg");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        
        const userChoice = choice.getAttribute("id");
        console.log("button was clicked",userChoice);
    });

});