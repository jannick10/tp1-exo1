input.onButtonPressed(Button.A, function () {
	
})
let direction = 1
let posX = 2
led.plot(posX, 0)
basic.forever(function () {
    led.unplot(posX, 0)
    posX += direction
    led.plot(posX, 0)
    if (posX >= 4) {
        direction = -1
    } else if (posX <= 0) {
        direction = 1
    }
    basic.pause(200)
})
