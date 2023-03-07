import inquirer from "inquirer";

const questions = [
  {
    questions: "What's your first name?",
  },
  {
    questions: "Hello Rio what's your email address?",
  },
  {
    questions: "Are you experienced developer?",
  },
  {
    questions: "How many years of experience you have with JavaScript?",
  },
  {
    questions: "What's JavaScript library do you know?",
  },
  {
    questions: "What is your desired salary?",
  },
];

// run your command
inquirer
  .prompt([
    {
      name: "firstName",
      message: "What's your first name?",
      type: "input",
    },
    {
      name: "emailAddress",
      message: "Hello $(firstName) what's your email address?",
      type: "input",
    },
    {
      name: "experienceDeveloper",
      message: "Are you experienced developer?",
      type: "list",
      choices: ["yes", "no"],
    },
    {
      name: "javascriptExperience",
      message: "How many years of experience you have with JavaScript?",
      type: "list",
      choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    },
    {
      name: "javascriptLibrary",
      message: "What JavaScript library do you know?",
      type: "checkbox",
      choices: ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"],
    },
    {
      name: "desiredSalary",
      message: "What is your desired salary?",
      type: "input",
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });
