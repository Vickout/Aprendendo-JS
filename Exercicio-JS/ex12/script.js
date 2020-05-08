class Spaceship {
    static get decelerationRate() {
        return 0.17
    }

    constructor(name, crewQty) {
        this.name = name
        this.crewQty = crewQty
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration * (1 - Spaceship.decelerationRate)
    }
}

class BattleSpaceship extends Spaceship {
    typeSpaceship(type, weapons) {
        this.type = type
        this.weaponsQty = weapons
    }
}

class TransportSpaceship extends Spaceship {
    typeSpaceship(type, seats) {
        this.type = type
        this.seatsQty = seats
    }
}

function Sign(){
    let shipName = prompt("Nome da nave:")
    let crewQty = prompt("Número de tripulantes:")
    let type = prompt("Qual o tipo da nave?\n1 - Batalha\n2 - Transporte")
    if(type == 1) {
        let weapons = prompt("Quantas armas a nave tem disponível?")
        let spaceship = new BattleSpaceship(shipName, crewQty)
        spaceship.typeSpaceship("Batalha", weapons)
        return spaceship
    } else if(type == 2){
        let seats = prompt("Quantos lugares a nave comporta?")
        let spaceship = new TransportSpaceship(shipName, crewQty)
        spaceship.typeSpaceship("Transporte", seats)
        return spaceship
    }
}

spaceship = Sign()

let flag = true

while (flag) {
    console.log(spaceship)
    const menu = prompt("Menu:\n1 - Acelerar a nave\n2 - Trocar a nave\n3 - Imprimir e Sair")
    switch (menu) {
        case "1":
            let acceleration = Number(prompt("Quanto você quer acelerar?"))
            spaceship.speedUp(acceleration)
            break
        case "2":            
            spaceship = Sign()
            break
        case "3":
            alert("Nome: " + spaceship.name + "\nQuantidade de tripulantes: " + spaceship.crewQty + "\nVelocidade atual: " + spaceship.currentVelocity)
            flag = false
            break
        default:
            continue
    }
}



