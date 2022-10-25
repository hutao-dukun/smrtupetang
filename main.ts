led.enable(false)
let i1 = pins.digitalReadPin(DigitalPin.P1)
let i2 = pins.digitalReadPin(DigitalPin.P2)
let i3 = pins.digitalReadPin(DigitalPin.P3)
let i4 = pins.digitalReadPin(DigitalPin.P4)
let i5 = pins.digitalReadPin(DigitalPin.P5)
basic.forever(function () {
    i1 = pins.digitalReadPin(DigitalPin.P1)
    i2 = pins.digitalReadPin(DigitalPin.P2)
    i3 = pins.digitalReadPin(DigitalPin.P3)
    i4 = pins.digitalReadPin(DigitalPin.P4)
    i5 = pins.digitalReadPin(DigitalPin.P5)
    if (sonar.ping(
    DigitalPin.P6,
    DigitalPin.P7,
    PingUnit.Centimeters
    ) < 10) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
    } else {
        if (i1 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            0
            )
        } else if (i2 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -130,
            SuperBit.enMotors.M3,
            0
            )
        } else if (i3 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -90,
            SuperBit.enMotors.M3,
            -90
            )
        } else if (i4 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -130
            )
        } else if (i5 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -129
            )
        } else {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -70,
            SuperBit.enMotors.M3,
            -80
            )
        }
    }
})
