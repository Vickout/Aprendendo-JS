const pilotName = prompt("Digite seu nome:")
let velocity = 0

const newVelocity = prompt("A nave está parada, a que velocidade (km/s) o piloto deseja alcançar?")
const confirmVelocity = confirm("Você quer alcançar esta velocidade: " + newVelocity + " km/s ?")

if(confirmVelocity){
    velocity = newVelocity
}

if(velocity == 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if(velocity < 40){
    alert("Você está devagar, podemos aumentar mais.")
} else if(velocity >=40 && velocity < 80){
    alert("Parece uma boa velocidade para manter.")
} else if(velocity >= 80 && velocity < 100){
    alert("Velocidade alta considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Piloto: " + pilotName + "\nVelocidade da nave: " + velocity + " km/s")