"use strict";
var cars = [{
        colour: "black",
        compny: "honda",
        modelYear: 2005,
        isUsed: true
    },
    {
        compny: "toyota",
        colour: "grey",
        modelYear: 2023,
        isUsed: false
    }];
for (let index = 0; index < cars.length; index++) {
    console.log(cars[index].compny);
    console.log(cars[index].colour);
}
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var userName = "abdullah";
var upperCase = userName.toUpperCase();
console.log(upperCase);
var userName1 = "HASNAIN";
var lowerCase = userName1.toLowerCase();
console.log(lowerCase);
//fail to write "titlecase".
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
var list = ["ali", "hassan", "umar"];
list.forEach((name) => {
    console.log(`${name} you are invited on dinner`);
});
var num = [1, 2, 5, 7, 3, 4];
var correct = num.sort();
console.log(correct);
//Famous Quote.
var famousQuote = "Eighty percent of success is showing up";
console.log(`Woddy Allen "${famousQuote}"`);
//
console.log(`----------------------------------------------------------------------------------------------`);
console.log(`                                             ${5 + 3}                                           `);
console.log(`----------------------------------------------------------------------------------------------`);
//Reveal Your Favourite Number.
var num1 = 5;
console.log(`My Favourite Number is ${num1}`);
//Names Of Friends.Print At Once And Text Personly To All
var name1 = ["talha", "fahad", "hassan", "umar"];
for (let index = 0; index < name1.length; index++) {
    console.log(name1[index], "=> Hello My Friend");
}
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these 
var list1 = ["Bike", "Car", "Aeroplane"];
for (let index = 0; index < list1.length; index++) {
    console.log("It is an essay way to travel through", list1[index]);
}
//Question # 8:Seeing the World: Think of at least five places in the world you’d like to visit.
var famousPlaces = ["the great wall of china", "effil tower", "statue of liberty", "big ben", "dubai"];
console.log(famousPlaces);
// In Alphabeticaly Ordered
var alpa = famousPlaces.sort();
console.log(alpa);
//Orginal array remains same
console.log(famousPlaces);
//In Reverse Alphabet Order
var alpa1 = famousPlaces.reverse();
console.log(alpa1);
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'
var alienColour = "yellow";
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alienColour == "yellow") {
    console.log("1st statement=>", 'you earned 5 points');
}
else {
    console.log("1st statement=>", "you are fail to earn points");
}
//Write one version of this program that passes the if test and another that fails.
var alienColour1 = "green";
if (alienColour1 == "yellow") {
    console.log("2nd statement=>", "you earn 5 points");
}
else {
    console.log("2nd statement=>", "you are fail to earn pooints");
}
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var colour = "red";
if (colour == "green") {
    console.log("you earned only 5 points");
}
else {
    console.log("you earned 10 points");
}
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien
function alienColours() {
    var colour1 = "red";
    if (colour1 == "green") {
        console.log('you earned 5 points');
    }
    else if (colour1 == "yellow") {
        console.log("you earned 10 points");
    }
    else if (colour1 == "red") {
        console.log("you earned 15 points");
    }
    else {
        console.log("you did not earn any point");
    }
}
;
alienColours();
//28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder
function stagesOfLife() {
    var num1 = 15;
    if (num1 < 2) {
        console.log("the person is a baby");
    }
    else if (num1 >= 2 && num1 < 4) {
        console.log("the person in a toddler");
    }
    else if (num1 >= 4 && num1 < 13) {
        console.log("the person is kid");
    }
    else if (num1 >= 13 && num1 < 20) {
        console.log("the person is teenager");
    }
    else if (num1 >= 20 && num1 < 65) {
        console.log("the person is adult");
    }
    else if (num1 > 65) {
        console.log("the person is an elder");
    }
}
;
stagesOfLife();
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var fruites = ["bannana", "mangoes", "oranges", "peach"];
function favoritefruits() {
    if (fruites.includes("mangoes")) {
        console.log("yes fruites[] includes mangoes");
    }
}
;
favoritefruits();
var fruites1 = ["mangoes", "bannanas", "oranges"];
function favorite_fruits() {
    if (fruites1.includes("mangoes")) {
        console.log("you realy likes mangoes");
    }
    if (fruites1.includes("gauvas")) {
        console.log("you really likes gauvas");
    }
    if (fruites1.includes("oranges")) {
        console.log("you really likes oranges");
    }
    if (fruites1.includes("apples")) {
        console.log("you really likes apples");
    }
    if (fruites.includes("pineapple")) {
        console.log("you really likes pineapple");
    }
}
;
favorite_fruits();
