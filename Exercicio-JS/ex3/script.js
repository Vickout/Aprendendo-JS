const lightYear = prompt("Digite a distância em ano-luz para conversão:")

let option = prompt("Digite o número das opções abaixo para conversão:\n1 - Parsec (pc)\n2 - Unidade Astrônomica (AU)\n3 - Quilômetros (km)")

switch(option){
    case "1":
        const parsec = lightYear * 0.306601
        alert("Distância Ano-Luz: " + lightYear + "\nParsec: " + parsec) 
        break
    case "2":
        const au = lightYear * 63241.1
        alert("Distância Ano-Luz: " + lightYear + "\nUnidade Astronômica: " + au) 
        break
    case "3":
        const km = lightYear * 9.5 * Math.pow(10,12)
        alert("Distância Ano-Luz: " + lightYear + "\nQuilômetros: " + km) 
        break
    default:
        alert("Opção Inválida")

}