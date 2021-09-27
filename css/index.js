let player = {
  name: "Debashis",
  chips:200
}
let cards = []
let sum=0
let isalive = false
let blackjack = false
let message=""
let messageel = document.querySelector("#message-el")
let cardel = document.querySelector("#cards-el")
let sumel = document.querySelector("#sum-el")
let playerel = document.querySelector("#player-el")

playerel.textContent=player.name+": $"+player.chips
function getrandomcard()
{
 let randomnumber = Math.floor(Math.random() * 13 + 1)
 if (randomnumber === 1)
  randomnumber = 11
 else if (randomnumber >10)
  randomnumber=10
 return randomnumber
}
function startgame() {
 isalive=true
 let firstcard = getrandomcard()
 let secondcard = getrandomcard()
  cards = [firstcard, secondcard]
  sum=firstcard+secondcard
 rendergame()
}
function rendergame()
{ blackjack=false
  cardel.textContent = "card:"
  for (let i = 0; i < cards.length; i++) {
   cardel.textContent += cards[i] + " "
  }
  sumel.textContent = "sum:" + sum
  if (sum <= 20)
   message = "want to play a round?"
  else if (sum === 21) {
    message = "you hit blackjack"
    player.chips = player.chips * 2
    playerel.textContent=player.name+": $"+player.chips
   blackjack = true
  }
else {
    message = "you are out of the game"
    player.chips = player.chips /2
    playerel.textContent=player.name+": $"+player.chips
   isalive=false
  }
 messageel.textContent=message
}
function newgame() {
 
 if(blackjack===false && isalive===true) {
   let card = getrandomcard()
   sum+=card
   cards.push(card)
   console.log(cards)
  rendergame()
 }
 
 

}