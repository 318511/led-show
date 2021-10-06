for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . # . . .
        . . # . #
        . # . # .
        # . # . .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        # . # . .
        . # . # .
        . . # . #
        . # . . .
        `)
}
basic.clearScreen()
basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            if (X % 2 != 0) {
                led.plot(X, 4 - Y)
            } else {
                led.plot(X, Y)
            }
            basic.pause(100)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (Y % 2 != 0) {
                led.unplot(4 - X, Y)
            } else {
                led.unplot(X, Y)
            }
            basic.pause(100)
        }
    }
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            if (X % 2 != 0) {
                led.plot(X, 4 - Y)
            } else {
                led.plot(X, Y)
            }
            basic.pause(100)
        }
    }
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (Y % 2 != 0) {
                led.unplot(4 - X, Y)
            } else {
                led.unplot(X, Y)
            }
            basic.pause(100)
        }
    }
})
