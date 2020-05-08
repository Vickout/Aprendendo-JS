const shipName = prompt("Qual o nome da nave?")
let count = 0
let option = 1

while(option == 1){
    option = prompt("Deseja entra em dobra espacial?\n1 - Sim\n2 - Não")
    if(option == 1){
        count++
    }
}

alert("Nome da Nave: " + shipName + "\nNúmero de dobras: " + count)