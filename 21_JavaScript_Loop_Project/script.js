// JavaScript Loops Project
// Guess The Number Function
function guessTheNumber(difficulty) {
    let randomNumber;
    let attemps = 0;
    let maxAttamps;
    let range;

    // Set Difficult-based Parameters
    switch (difficulty) {
        case 'easy':
            range = 10;
            maxAttamps = 5;
            randomNumber = Math.floor(Math.random() * 10 + 1); // Rang 1- 10
            console.log(randomNumber);
            break;
        case 'medium':
            range = 100;
            maxAttamps = 7;
            randomNumber = Math.floor(Math.random() * 100 + 1); // Rang 1- 100
            console.log(randomNumber);
            break;
        case 'hard':
            range = 1000;
            maxAttamps = 10;
            randomNumber = Math.floor(Math.random() * 1000 + 1); // Rang 1- 1000
            console.log(randomNumber);
            break;
        default:
            console.error('Invalid difficulty level. Choose "easy", "medium", or "hard"');

    }
    let multiplicatonFactor = 83819;
    let multipulyNumber = 636;
    // Get user input and check guesses
    while (attemps < maxAttamps) {
        let guess = parseInt(prompt(`Guess a number between 1 and ${range}(Inclusive). You have ${maxAttamps - attemps} attemp left`));
        attemps++;
        if (guess === randomNumber) {
            console.log('Congratulation! your guess the number in', attemps, 'attemps');
            break;
        } else if (guess < randomNumber) {
            console.log('Too Low. Try again');
        } else {
            console.log('Too High. Try again');
        }
        console.log(guess);
    }
    if (maxAttamps === attemps) {
        console.log('Sorry, You ran out of attemps. the Number was', randomNumber);
    }
}

//Get user input difficulty
let difficulty = prompt('Chosse difficulty (easy, medium, hard)').toLowerCase();
guessTheNumber(difficulty)
// console.log(difficulty);