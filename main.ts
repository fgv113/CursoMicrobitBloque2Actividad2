input.onButtonPressed(Button.A, function () {
    cronómetro = 0
})
input.onButtonPressed(Button.AB, function () {
    for (let index of registro) {
        basic.showNumber(registro[index])
    }
})
input.onButtonPressed(Button.B, function () {
    registro.push(cronómetro)
    basic.showNumber(cronómetro)
})
let cronómetro = 0
let registro: number[] = []
registro = []
cronómetro = 0
basic.forever(function () {
    cronómetro += 1
    basic.pause(100)
})
