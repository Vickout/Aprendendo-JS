let velocity = 150

function slowdown(velocity, printer){
    while(velocity > 0){
        printer(velocity)
        velocity -= 20
        if(velocity < 0){
            velocity = 0
            printer(velocity)
        }
    }
}

let printerVelocity = velocity => {
    alert("Velocidade da nave: " + velocity + " km/s")
}

slowdown(velocity, printerVelocity)

alert("A espaçonave está parada! As comportas podem ser abertas.")