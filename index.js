var inquirer = require("inquirer");
var fs = require("fs");
var importBasic = require("./BasicCard.js");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
        type: "list",
        message: "Which game do you want to play?",
        choices: ["flash cards", "cloze cards", "exit"],
        name: "cardtype"
    }
])
.then(function(inquirerResponse) {
    switch(inquirerResponse.cardtype) {
        case "flash cards":
            flashCards();
            break;
        case "cloze cards":
            clozeCards();
            break;
        case "exit":
            process.exit();
    }
  });

  function flashCards() {
    fs.readFile("flashcard.json", "utf8", function(error, data) {

         
        
          // If the code experiences any errors it will log the error to the console.
          if (error) {
            return console.log(error);
          }
           
          console.log(data);
          obj = JSON.parse(data);
          console.log(obj);
          console.log(obj.length);
    
             
          for (var i = 0; i < obj.length; i++) {
           var displayBasic=importBasic.basicCards(obj[i].front,obj[i].back)
           displayBasic.frontdisplay();
           displayBasic.backdisplay(); 
        }
    
    });
  }

  function clozeCards() {
    console.log("inside cloze cards");
}