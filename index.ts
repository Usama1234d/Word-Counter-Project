#! /usr/bin/env node 

// Importing inquirer
import inquirer from "inquirer";

//  Declaring a const "answer" and assign it to the result of inquirer.promot
const answer: {
    Sentence : string
} = await inquirer.prompt([

    { 
        name : "Sentence",
        type : "input",
        message : "Please write your sentence to count the words"
}
]) 

const words = answer.Sentence.trim().split(" ")
// Print the array of words to console
console.log(words);

// Print the word count of the sentence to the console...
console.log(`Your word of your sentnece is ${words.length}`);







//     name : "type",
//     type : "input",
//     sentence : "Please enter your sentence to count the words"

// } = ([await inquirer.prompt ])