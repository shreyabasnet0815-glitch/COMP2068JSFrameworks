var prompt = require("prompt");

prompt.start();

prompt.get(
  ["userSelection"],

  function (err, result) {
    console.log("You picked " + result.userSelection);
    compchoice = Math.random();
    if (compchoice < 0.34) {
      ComputerSelection = "Paper";
      console.log("Computer choose Paper");
    } else if (compchoice > 0.35 && compchoice < 0.67) {
      ComputerSelection = "Scissors";
      console.log("Computer choose Scissors");
    } else if (compchoice > 0.68 && compchoice < 1.0) {
      ComputerSelection = "Rock";
      console.log("Computer choose Rock");
    }

    if (result.userSelection === ComputerSelection) console.log("It's a tie");
    else if (result.userSelection === "Rock" && ComputerSelection == "Scissors")
      console.log("User Wins!!");
    else if (result.userSelection === "Paper" && ComputerSelection == "Rock")
      console.log("User Wins!!");
    else if (
      result.userSelection === "Scissors" &&
      ComputerSelection == "Paper"
    )
      console.log("User Wins!!");
    else console.log("Computer Wins");
  }
);