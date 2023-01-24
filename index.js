console.log("I'm building a BlackJack game!")
//create the player object. give it two keys; name and chips

let player = {
    name:"marto",
    chip: 1000000,
    sayHello: function(){
       console.log("How are you ") 
    }
}
player.sayHello()

//1. create two variables, firstcard and secondcard
//set their value to a randon number between 2- 11
// let firstcard = getRandomCard()
// let secondcard = getRandomCard()
let cards = [] //Array
//array is an ordered list of items

//2. create a variable, sum, and set it to the sum of the two card
let sum = 0
//console.log(sum)
let hasBlackJack = false
let isAlive = false
let message = "";

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

// let playerEl = document.querySelector("#player-el")
// playerEl.textContent = player.name + ": $" + player.chip

console.log(cards)

//Create a funtion, getRandomCard(), that always returns the number 5
function getRandomCard() {
    //if 1       -> return 11
    //if 11-13   -> return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber == 1)
        return 11
    else if (randomNumber > 10)
        return 10
    else
        return randomNumber

}

function startGame() {
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard] //Array
    //array is an ordered list of items
    sum = firstcard + secondcard
    renderGame()
}

function renderGame() {
    //render out firstCard and secondCard
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
        cardEl.textContent += cards[i] + " "
    }

    //render out all the cards we have
    if (sum < 21) {
        //console.log("Do you want to draw a new card?")
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        // console.log("you've got Blackjack!")
        hasBlackJack = true
        message = "you've got Blackjack!";
    }
    else {
        // console.log("you're out of the game!")
        isAlive = false
        message = "you're out of the game!";
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    // console.log(message)
}
function newCard() {
    // console.log("Drawing a new card")
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}



//CASH OUT
console.log(hasBlackJack)
console.log(isAlive)


//check if the person is old enough to enter the nightclub(21)
//log a suitable message to the console in both cases
let age = 22

if (age <= 20) {
    console.log("you can not enter the club")
}
else {
    console.log("YOu're Welcome!")
}

//check if the person is elegible for birthday card from the king (100)
let personAge = 100

if (personAge < 100) {
    console.log("Not elegible")
}
else if (personAge === '100') {
    console.log("here is your birthday card from the king!")
}
else {
    console.log("Not elegible, you have already gotten one")
}

