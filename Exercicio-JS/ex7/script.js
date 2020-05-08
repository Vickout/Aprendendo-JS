const shipName = prompt("Nome da nave:")
let velocity = 0
let flag = true

function Menu(){
    let option = prompt("O que você deseja?:\n1 - Acelerar a nave em 5km/s\n2 - Desacelera a nave em 5km/s" + 
                    "\n3 - Imprimir dados de bordo\n4 - Sair do Programa")
    return option
}

function speedUp(velocity){
    velocity += 5
    return velocity
}

function slowdown(velocity){
    if(velocity > 0){
        velocity -= 5
    }
    return velocity
}

function boardData(velocity, shipName){
    alert("Nome da nave: " + shipName + "\n Velocidade atual: " + velocity)
}

while(flag){
    chosenOption = Menu()
    switch(chosenOption){
        case "1":
            velocity = speedUp(velocity)
            break
        case "2":
            velocity = slowdown(velocity)
            break
        case "3":
            boardData(velocity, shipName)
            break
        case "4":
            flag = false
            break
        default:
            continue
    }
}
