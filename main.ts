function level (num: number, fila: number) {
    if (num == 1) {
        led.plotBrightness(fila, 4, 255)
        led.plotBrightness(fila, 3, 0)
        led.plotBrightness(fila, 2, 0)
        led.plotBrightness(fila, 1, 0)
        led.plotBrightness(fila, 0, 0)
    } else if (num == 2) {
        led.plotBrightness(fila, 4, 255)
        led.plotBrightness(fila, 3, 255)
        led.plotBrightness(fila, 2, 0)
        led.plotBrightness(fila, 1, 0)
        led.plotBrightness(fila, 0, 0)
    } else if (num == 3) {
        led.plotBrightness(fila, 4, 255)
        led.plotBrightness(fila, 3, 255)
        led.plotBrightness(fila, 2, 255)
        led.plotBrightness(fila, 1, 0)
        led.plotBrightness(fila, 0, 0)
    } else if (num == 4) {
        led.plotBrightness(fila, 4, 255)
        led.plotBrightness(fila, 3, 255)
        led.plotBrightness(fila, 2, 255)
        led.plotBrightness(fila, 1, 255)
        led.plotBrightness(fila, 0, 0)
    } else if (num == 5) {
        led.plotBrightness(fila, 4, 255)
        led.plotBrightness(fila, 3, 255)
        led.plotBrightness(fila, 2, 255)
        led.plotBrightness(fila, 1, 255)
        led.plotBrightness(fila, 0, 255)
    } else {
        led.plotBrightness(fila, 4, 0)
        led.plotBrightness(fila, 3, 0)
        led.plotBrightness(fila, 2, 0)
        led.plotBrightness(fila, 1, 0)
        led.plotBrightness(fila, 0, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    while (input.soundLevel() < 100) {
        basic.pause(100)
    }
    for (let index1 = 0; index1 <= 4; index1++) {
        modelo[index1] = input.soundLevel()
        basic.pause(200)
    }
})
let Error = 0
let modelo: number[] = []
modelo = [
0,
0,
0,
0,
0
]
let Audio = [
0,
0,
0,
0,
0
]
let Diferencia = [
0,
0,
0,
0,
0
]
basic.forever(function () {
    while (input.soundLevel() < 100) {
        basic.pause(100)
    }
    for (let index2 = 0; index2 <= 4; index2++) {
        Audio[index2] = input.soundLevel()
        basic.pause(200)
    }
    for (let index2 = 0; index2 <= 4; index2++) {
        level(Math.round(Math.map(Audio[index2], 0, 255, 0, 5)), index2)
    }
    basic.pause(500)
    Error = 0
    for (let index2 = 0; index2 <= 4; index2++) {
        Diferencia[index2] = Audio[index2] - modelo[index2]
        Error += Math.abs(Diferencia[index2])
    }
    if (Error < 100) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
    }
})
