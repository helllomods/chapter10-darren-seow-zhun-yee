basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        edubitMotors.setServoPosition(ServoChannel.S1, 30)
    } else if (input.buttonIsPressed(Button.B)) {
        edubitMotors.setServoPosition(ServoChannel.S1, 150)
    } else {
        edubitMotors.setServoPosition(ServoChannel.S1, 90)
    }
})
