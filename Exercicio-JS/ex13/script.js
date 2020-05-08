function addHouse() {
    let houseNumber = document.querySelector("input[name='house-number']").value
    let neighbor = document.querySelector("input[name='neighbor']").value
    let city = document.querySelector("input[name='city']").value
    let houseArea = document.querySelector("input[name='house-area']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = "Número: " + houseNumber + ", Área: " + houseArea + " ( " + neighbor + " - " + city + " ) "

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}