let firstCard = 6
let secondCard = 9
let hasBlackJack = false
let isAlive = true

let sum = firstCard + secondCard
console.log(sum)

let message = " "

if (sum <= 20) {
    message = ("Do you want to draw a new card?")
  }else if (sum === 21){
        message = ("Whoo! You've got Blackjack!")
        hasBlackJack = true
    }else{
        message = ("You're out of the game")
        isAlive = false 
    }

    console.log(hasBlackJack)
    console.log(isAlive)
    console.log (message)