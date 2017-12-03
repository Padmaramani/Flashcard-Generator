var inquirer = require("inquirer");
var clear = require('clear');
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
var fs = require("fs");
var importCloze = require("./ClozeCard.js");
var importBasic = require("./BasicCard.js");


function primefunction(){
// Create a "Prompt" with a series of questions.
clear()
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
        type: "list",
        message: "Which game do you want to play?",
        choices: ["flash cards", "cloze cards", "add questions","exit"],
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
        case "add questions":
            addQuestions();
            break;
        case "exit":
            process.exit();
    }
  });
}

function flashCards() {
    clear()
    inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
          type: "list",
          message: "What mode do you want to play in?",
          choices: ["interactive", "question and answer"],
          name: "gamemode"
      }
  ])
  .then(function(inquirerResponse) {
      switch(inquirerResponse.gamemode) {
          case "interactive":
              interactive();
              break;
          case "question and answer":
              questionandanswer();
              break;
      }
    })
}

function interactive () {
    
        
        fs.readFile("flashcard.json", "utf8", function(error, data) {
           
     
              // If the code experiences any errors it will log the error to the console.
              if (error) {
                return console.log(error);
              }
               
            
              obj = JSON.parse(data);
              
             
                interactivedisplay(0)

           
        })
    }

    function interactivedisplay(i) {
        clear()
        inquirer
        .prompt([
          // Here we create a basic text prompt.
          {
              type: "list",
              message: "What do u want to do?",
              choices: ["see the question", "see the question and answer"],
              name: "choice"
          }
      ])
      .then(function(inquirerResponse) {
          switch(inquirerResponse.choice) {
              case "see the question":                    
                     var displayBasic=new importBasic.basicCard(obj[i].front,obj[i].back)
                     display_question=displayBasic.frontDisplay();
                     inquirer
                     .prompt([
                       // Here we create a basic text prompt.
                       {
                           type: "confirm",
                           message: "Ready to see the answer?",
                           name: "confirmanswer"
                       }
                   ])
                   .then(function(inquirerResponse) {
                     if(inquirerResponse.confirmanswer) { displayBasic.backDisplay()}
                 })
                 
             break; 
              case "see the question and answer":
                 var displayBasic=new importBasic.basicCard(obj[i].front,obj[i].back)
                 displayBasic.frontDisplay(); 
                 displayBasic.backDisplay();
                 
             break;
          }
         
          setTimeout(primefunction, 5000)
        })
    }

    function questionandanswer() {
        fs.readFile("flashcard.json", "utf8", function(error, data) {
            
      
               // If the code experiences any errors it will log the error to the console.
               if (error) {
                 return console.log(error);
               }
                
             
               obj = JSON.parse(data);
               clear()
               for (i=0;i<obj.length;i++) {
                var displayBasic=new importBasic.basicCard(obj[i].front,obj[i].back)
                display_question=displayBasic.frontDisplay(); 
                display_question=displayBasic.backDisplay();
               
               }
        

    }) 
    console.log("wait for 5 seconds to go back to main screen") ;
    setTimeout(primefunction, 5000)
}

function clozeCards() {
    console.log("inside cloze cards");
    fs.readFile("clozecard.json", "utf8", function(error, data) {
        
                 
                
                  // If the code experiences any errors it will log the error to the console.
                  if (error) {
                    return console.log(error);
                  }
                   
                  //console.log(data);
                  obj = JSON.parse(data);
               
            
                     
                  for (var i = 0; i < obj.length; i++) {
                   text = obj[i].text;
                   cloze= obj[i].cloze;
                   partialText = text.replace(cloze,"----")
                   //console.log(text)
                   //console.log(cloze)
                   //console.log(partialText)
                   
                    var displayCloze=new importCloze.clozecard(text,partialText,cloze);
                    //displayCloze.textDisplay();
                    displayCloze.partialText();
                    displayCloze.clozeText(); 
                }
            
            })
        }

    function addQuestions() {

        inquirer.registerPrompt('recursive', require('inquirer-recursive'));
        inquirer.prompt([{
            type: 'recursive',
            message: 'Add a new question?',
            name: 'questionbank',
            prompts: [
                {
                    type: 'input',
                    name: 'question',
                    message: 'What is the question?'
                    }
                , {
                    type: 'input',
                    name: 'answer',
                    message: 'what is the answer?'
                }
            ]
        }]).then(function(answers) {
            console.log("questions added are below")
            console.log(answers.questionbank);
        
    })
    };

    primefunction()
