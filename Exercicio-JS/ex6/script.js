let shipName = prompt("Nome da nave:")
let invertName = ""

for(let i = shipName.length - 1; i >= 0; i--){
    if(shipName[i] == "e"){
        break
    }
    invertName += shipName[i]
}

alert("Nome da nave: " + shipName + "\nNome invertido: " + invertName)