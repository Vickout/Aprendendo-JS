let spaceship = prompt("Nome da espaçonave:")
let newSpaceship = ""

let currentCaractere = prompt("Caractere que deseja mudar:")
let changedCaractere = prompt("Caractere que deseja substituir:")

for(let i = 0; i < spaceship.length; i++){
  if(spaceship[i] == currentCaractere){
    newSpaceship += changedCaractere
   } else {
     newSpaceship += spaceship[i]
   }
}

alert("Novo nome da nave: " + newSpaceship)