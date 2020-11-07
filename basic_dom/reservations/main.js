
/////////////////// EX2 //////////////////////////


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const input = document.createElement("input")
input.setAttribute("id", "input")
input.setAttribute("placeholder", "Who are you?")

document.body.appendChild(input)
const button = document.createElement("button")
button.setAttribute("id", "button")
document.body.appendChild(button)
button.innerHTML = "Check Reservation"

button.onclick = function(){
    let name = document.getElementById("input").value
    if(reservations[name] && !reservations[name].claimed) {
        alert("welcome in, " + name)
      } else if (reservations[name] && reservations[name].claimed){
        alert("Hmm, someone already claimed this reservation")
      } else if (!reservations[name]) {
        alert("You have no reservation")
      }	
}






