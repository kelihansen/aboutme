'use strict';

// getting to know you

const name = prompt('Hello there, and what might your name be?');
window.alert ('After what you wrote in this amazing prompt, it appears your name is ' + name);
console.log('Your name is ' + name);

const age = prompt('How old are you?');
window.alert ('Holy Moly! It appears you were born yesterday, since you are only ' + age);
console.log('You are ' + age + ' years old');

const food = prompt('What is your favorite food to eat?');
window.alert ('Aha! It seems that your favorite thing to eat is ' + food);
console.log('Your favorite food is ' + food);

const animal = prompt('And last but not least, what is your favorite animal?');
window.alert ('That is so interesting, that your favorite animal is ' + animal);
console.log('Your favorite animal is ' + animal);

// ice cream game - need to figure out how to make responses other than y and n say something other than the no response.

alert ('Now let\'s play a game!!!!');

const likesChocolate = prompt('Do you like chocolate icecream?');

if (likesChocolate.toLowerCase() === 'yes' || likesChocolate.toLowerCase() === 'y') {
    alert('That\'s so funny, chocolate is actually good for you! In moderation that is..');
    console.log('User likes chocolate icecream');
}   else {(likesChocolate.toLowerCase() === 'no' || likesChocolate.toLowerCase() === 'n');
    alert('What?!?! Why not?? Chocolate is good for you dude/dudette!');
    console.log('User does not like chocolate icecream');}

const likesVanilla = prompt('Do you like Vanilla icecream??');

if (likesVanilla.toLowerCase() === 'yes' || likesVanilla.toLowerCase() === 'y') {
    alert('Yay!!! For Vanilla icecream!');
    console.log('User likes vanilla icecream');
}   else {(likesVanilla.toLowerCase() === likesVanilla.toLowerCase() === 'no' || 'n');
    alert('Pffff!!!!! Whatever!');
    console.log('User does not like vanilla icecream');}

const likesPistacio = prompt('Do you like Pistacio icecream?');

if (likesPistacio.toLowerCase() === 'yes' || likesPistacio.toLowerCase() === 'y') {
    alert('Heck yes! Pistacio iceream rocks!');
    console.log('User likes pistacio icecream');
}   else {(likesPistacio.toLowerCase() === 'no' || likesPistacio.toLowerCase() === 'n');
    alert('Pistacio icecream is the best though!?!');
    console.log('User does not like pistacio icecream');}

const likesStrawberry = prompt ('Do you like Strawberry icecream?');

if (likesStrawberry.toLowerCase() === 'yes' || likesStrawberry.toLowerCase() === 'y') {
    alert('Strawberry fields forever!!!');
    console.log('User likes strawberry icecream');
}   else {(likesStrawberry.toLowerCase() === 'no' || likesStrawberry.toLowerCase() === 'n');
    alert('Well, they are high in vitamin C, so maybe you should START LIKING THEM!');
    console.log('User does not like strawberry icecream');}

const likesCoffee = prompt('Do you like Coffee icecream?');

if (likesCoffee.toLowerCase() === 'yes' || likesCoffee.toLowerCase() === 'y') {
    alert('What\'s better than drinking coffee??? Eating it!');
    console.log('User likes coffee icecream');
}   else {(likesCoffee.toLowerCase() === 'no' || likesCoffee.toLowerCase() === 'n');
    alert('Dude/Dudette...really? Just really?');
    console.log('User does not like coffee icecream');}

// for loop program

const yourFlavors = [];

for (let i = 0; i < 31; i ++) {
    const guess = parseInt(prompt('Do you know how many flavors of icecream we have?'));
    if (guess === 0) {
        alert('We definitely have more than that!');
    } else if (guess < 10) {
        alert('Keep trying! We have more than ten!');
    } else if (guess < 15) {
        alert('Keep going, hint think about a famous icecream chain');
    } else if (guess < 20) {
        alert('Almost!!!');
    } else if (guess < 31) {
        alert('Just about there!!!');
    } else if (guess === 31) {
        alert('Good job!');
        yourFlavors.push(); // need to figure out how to store user y and n's
        // into const yourFlavors, so it can print what icecream they should order in the end.
        break;
    }
}
alert('You should order these flavors when you come into the shop ' + yourFlavors); // need to fix

// new while loop program

const myNumber = 27;
const userNumber = prompt('Guess a number');
console.log('To exit the loop type in 27'); // added exit number

while (userNumber != myNumber) {
    userNumber = prompt('Keep guessing the number'); //receives error, need to fix.

}


