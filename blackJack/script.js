let min = 2
let max = 11

let firstCard = Math.floor(Math.random() * (max - min + 1)) + min
let secondCard = Math.floor(Math.random() * (max - min + 1)) + min

let hasBlackJack = false
let isAlive = true

let message = ""

let sum = firstCard + secondCard

let messageElement = document.getElementById("message-element")
let cardsElement = document.getElementById("cards")
let sumElement = document.getElementById("sum")

let startButton = document.getElementById("startButton")

let cards = getCard(firstCard) + " " + getCard(secondCard)

let player = {
    name: "Pratham",
    chips: 200
}

let playerElement = document.getElementById("playerElement")

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "Wohoo! You've got a black jack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    player.chips -= sum
    sumElement.textContent = sum
    messageElement.textContent = message
    cardsElement.textContent = cards
    playerElement.textContent = player.name + ": $" + player.chips

}

function startGame(){
    renderGame()
}

function getCard(num){
    if (num === 11){
        return "Ace"
    }else if (num === 10){
        return "King"
    }else {
        return String(num)
    }
}

function newCard(){
    if (isAlive && !hasBlackJack && (player.chips > 0)) {
        let thirdCard = Math.floor(Math.random() * (max - min + 1)) + min
        sum += thirdCard
        cards += " " + getCard(thirdCard)
        renderGame()
    }
    else{
        
    }
}
