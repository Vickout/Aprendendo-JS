let spaceshipList = []
let flag = true  

class spaceship {
    constructor(name, crewQty){
        this.name = name,
        this.crewQty = crewQty
        this.hitchedOn = false
        this.openedDoors = false
    }

    hitched(hitchedOn) {
        this.hitchedOn = hitchedOn
    }

    doors(openedDoors) {
        this.openedDoors = openedDoors
    }
}

while (flag) {
    const chosenOption = prompt("1 - Realizar engate\n2 - Imprimir naves\n3 - Sair do programa")
    switch (chosenOption) {
        case "1":
            const name = prompt("Nome da nave:")
            const crewQty = prompt("Quantidade de tripulantes:")
            let ship = new spaceship(name, crewQty)
            spaceshipList.push(ship)
            ship.hitched(true)
            ship.doors(true)
            break
        case "2":
            let list = ""
            spaceshipList.forEach((spaceshipName, index) => {
                list += (index + 1) + " - " + spaceshipName.name + "\n" 
            }) 
            alert(list)       
            break
        case "3":
            flag = false
        default:
            continue         
    }
}
