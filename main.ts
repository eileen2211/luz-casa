input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Apagar luces") {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Forever)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 100 && input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
    if (input.lightLevel() > 100 && input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendString("Apagar luces")
    } else {
        basic.clearScreen()
    }
})
