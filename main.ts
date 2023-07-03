let dieValue = 0
function one () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function three () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . #
        `)
}
function five () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
}
function rollDie () {
    dieValue = randint(1, 6)
    if (dieValue == 1) {
        one()
    }
    if (dieValue == 2) {
        two()
    }
    if (dieValue == 3) {
        three()
    }
    if (dieValue == 4) {
        four()
    }
    if (dieValue == 5) {
        five()
    }
    if (dieValue == 6) {
        six()
    }
}
function four () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
}
input.onGesture(Gesture.Shake, function () {
    one()
    basic.pause(500)
    two()
    basic.pause(500)
    three()
    basic.pause(500)
    four()
    basic.pause(500)
    five()
    basic.pause(500)
    six()
    basic.pause(500)
    basic.clearScreen()
    rollDie()
})
function two () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `)
}
function six () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        `)
}
