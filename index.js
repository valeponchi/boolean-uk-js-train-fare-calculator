let yourAge = Number(prompt("What is your age?"))
let howFarYouTravelling = Number(prompt("How many Km far from the station do you need to go?"))
let priceTicketPerKm = 0.21
let travelPrice = howFarYouTravelling * priceTicketPerKm
if (yourAge < 18) {
  let discountMinors = (travelPrice / 100) * 80
  alert("You can have a 20% discount!")
  console.log("Total with 20% discount = " + ("£" + discountMinors.toFixed(2)))
} else if (yourAge > 65) {
  let discountSeniors = (travelPrice / 100) * 60
  alert("You can have a 40% discount!")
  console.log("Total with 40% discount = " + ("£" + discountSeniors.toFixed(2)))  
} else console.log("Total Travel Price = " + ("£" + travelPrice.toFixed(2)))
