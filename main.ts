input.onButtonPressed(Button.A, function () {
    if (!(X == 0)) {
        X += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(X == 4)) {
        X += 1
    }
})
let BallY = 0
let BallX = 0
let BallDirectionX = 0
let X = 0
X = 2
if (randint(0, 1) == 1) {
    BallDirectionX = 1
} else {
    BallDirectionX = 2
}
BallDirectionX = 0
basic.forever(function () {
    let BallDirectionY = 0
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.unplot(2, 0)
    led.unplot(3, 0)
    led.unplot(4, 0)
    led.unplot(0, 1)
    led.unplot(1, 1)
    led.unplot(2, 1)
    led.unplot(3, 1)
    led.unplot(4, 1)
    led.unplot(0, 2)
    led.unplot(1, 2)
    led.unplot(2, 2)
    led.unplot(3, 2)
    led.unplot(4, 2)
    led.unplot(0, 3)
    led.unplot(1, 3)
    led.unplot(2, 3)
    led.unplot(3, 3)
    led.unplot(4, 3)
    if (BallDirectionX == 1 && BallX == 5) {
        BallDirectionX = 0
        BallX = 4
    }
    if (BallDirectionX == 0 && BallX == -1) {
        BallDirectionX = 1
        BallX = 0
    }
    if (BallDirectionY == 0) {
        BallY += -1
    } else {
        BallY += 1
    }
    if (BallDirectionX == 0) {
        BallX += -1
    } else {
        BallX += 1
    }
    led.plot(BallX, BallY)
    basic.pause(100)
    led.unplot(BallX, BallY)
})
basic.forever(function () {
    led.unplot(0, 4)
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.unplot(4, 4)
    led.plot(X, 4)
})
