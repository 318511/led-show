let Y = 0
let X = 0
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
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    X = 0
    Y = 0
    for (let index = 0; index < 2; index++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(100)
        }
        Y += 1
        for (let X = 0; X <= 4; X++) {
            led.plot(4 - X, Y)
            basic.pause(100)
        }
        Y += 1
    }
    for (let X = 0; X <= 4; X++) {
        led.plot(X, Y)
        basic.pause(100)
    }
    X = 0
    Y = 0
    for (let index = 0; index < 2; index++) {
        for (let X = 0; X <= 4; X++) {
            led.unplot(X, Y)
            basic.pause(100)
        }
        Y += 1
        for (let X = 0; X <= 4; X++) {
            led.unplot(4 - X, Y)
            basic.pause(100)
        }
        Y += 1
    }
    for (let X = 0; X <= 4; X++) {
        led.unplot(X, Y)
        basic.pause(100)
    }
})
