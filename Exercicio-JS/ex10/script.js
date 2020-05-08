const shipName = prompt("Nome da nave:")
const typeShip = prompt("Tipo da nave:")
const maxVelocity = prompt("Velocidade máxima da nave (km/s):")
let flag = true

let spaceship = {
    name: shipName,
    type: typeShip,
    maxVel: maxVelocity,
}

spaceship.velocity = 0
spaceship.speedUp = function(acceleration){
    this.velocity += Number(acceleration)
}

while(flag){
    const chosenOption = prompt("O que você quer?\n1 - Acelerar\n2 - Parar")
    switch(chosenOption){
        case "1":
            const acceleration = prompt("O quanto quer acelerar? (km/s)")
            spaceship.speedUp(acceleration)
            if(spaceship.velocity > spaceship.maxVel){
                alert("Velocidade atual: " + spaceship.velocity + " km/s\nVelocidade máxima: " + spaceship.maxVel + " km/s")
            }
            break
        case "2":
            alert("Nome da nava: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade: " + spaceship.velocity + " km/s\nVelocidade máxima: " + spaceship.maxVel + " km/s")
            spaceship.velocity = 0
            flag = false
            break
        default:
            alert("Opção Inválida!")
            break
} 
}
console.log(spaceship)
