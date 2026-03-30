function Temperatur2 () {
    set_temperature += -1
    basic.showNumber(set_temperature)
}
function Temperatur () {
    set_temperature += 1
    basic.showNumber(set_temperature)
}
function alarm () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    modules.led4.setBrightness(100)
    modules.led4.setAll(0xff0000)
    basic.pause(100)
    modules.led4.setAll(0xff8000)
    basic.pause(100)
    modules.led4.setAll(0xffff00)
    basic.pause(100)
    modules.led4.setAll(0x000000)
    basic.pause(200)
}
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    lights += 1
    if (lights == 1) {
        modules.led4.setAll(0xff0000)
    }
    if (lights == 2) {
        modules.led4.setAll(0xff0000)
    }
    if (lights == 3) {
        modules.led4.setAll(0xff8000)
    }
    if (lights == 4) {
        modules.led4.setAll(0xffff00)
    }
    if (lights == 5) {
        modules.led4.setAll(0xff9da5)
    }
    if (lights == 6) {
        modules.led4.setAll(0x00ff00)
    }
    if (lights == 7) {
        modules.led4.setAll(0xb09eff)
    }
    if (lights == 8) {
        modules.led4.setAll(0x00ffff)
    }
    if (lights == 9) {
        modules.led4.setAll(0x007fff)
    }
    if (lights == 10) {
        modules.led4.setAll(0x65471f)
    }
    if (lights == 11) {
        modules.led4.setAll(0x0000ff)
    }
    if (lights == 12) {
        modules.led4.setAll(0x7f00ff)
    }
    if (lights == 13) {
        modules.led4.setAll(0xff0080)
    }
    if (lights == 14) {
        modules.led4.setAll(0xff00ff)
    }
    if (lights == 15) {
        modules.led4.setAll(0xffffff)
    }
    if (lights == 16) {
        modules.led4.setAll(0x999999)
    }
    if (lights == 17) {
        lights = 1
    }
})
function AlarmONOFF () {
    Alarm_ON = !(Alarm_ON)
    if (Alarm_ON) {
        Alarm_ON = true
        basic.showString("Alarm ON", 100)
    } else {
        Alarm_ON = false
        basic.showString("Alarm OFF", 100)
    }
}
function Tuer () {
    modules.led4.setAll(0x000000)
    open_door = !(open_door)
    if (open_door) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            # # . . .
            # . # . .
            # . . # .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            # # # # .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        modules.led4.setBrightness(100)
        modules.led4.setPixelColor(0, 0x00ff00)
        basic.pause(100)
        modules.led4.setPixelColor(1, 0x00ff00)
        basic.pause(100)
        modules.led4.setPixelColor(2, 0x00ff00)
        basic.pause(100)
        modules.led4.setPixelColor(3, 0x00ff00)
        basic.pause(100)
        modules.led4.setPixelColor(4, 0x00ff00)
        basic.pause(100)
        modules.led4.setPixelColor(5, 0x00ff00)
        basic.pause(100)
        modules.led4.setPixelColor(6, 0x00ff00)
        basic.pause(100)
        modules.led4.setPixelColor(7, 0x00ff00)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.C8, 90)
    } else {
        modules.led4.setAll(0x00ff00)
        basic.showLeds(`
            # . . . .
            # # # # .
            # # . . .
            # . . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            # # . . .
            # . # . .
            # . . # .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        modules.led4.setBrightness(100)
        modules.led4.setPixelColor(0, 0x000000)
        basic.pause(100)
        modules.led4.setPixelColor(1, 0x000000)
        basic.pause(100)
        modules.led4.setPixelColor(2, 0x000000)
        basic.pause(100)
        modules.led4.setPixelColor(3, 0x000000)
        basic.pause(100)
        modules.led4.setPixelColor(4, 0x000000)
        basic.pause(100)
        modules.led4.setPixelColor(5, 0x000000)
        basic.pause(100)
        modules.led4.setPixelColor(6, 0x000000)
        basic.pause(100)
        modules.led4.setPixelColor(7, 0x000000)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.C8, 0)
    }
}
function Licht () {
    if (Light_ON) {
        Light_ON = true
        modules.led4.setAll(0xffffff)
        basic.showString("Light ON", 100)
    } else {
        Light_ON = false
        modules.led4.setAll(0x000000)
        basic.showString("Light OFF", 100)
    }
    Light_ON = !(Light_ON)
}
function HausONOFF () {
    modules.led4.setAll(0x00ff00)
    basic.showLeds(`
        # . . . .
        # # # # .
        # # . . .
        # . . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . # . .
        # . . # .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    modules.led4.setBrightness(100)
    modules.led4.setPixelColor(0, 0x000000)
    basic.pause(100)
    modules.led4.setPixelColor(1, 0x000000)
    basic.pause(100)
    modules.led4.setPixelColor(2, 0x000000)
    basic.pause(100)
    modules.led4.setPixelColor(3, 0x000000)
    basic.pause(100)
    modules.led4.setPixelColor(4, 0x000000)
    basic.pause(100)
    modules.led4.setPixelColor(5, 0x000000)
    basic.pause(100)
    modules.led4.setPixelColor(6, 0x000000)
    basic.pause(100)
    modules.led4.setPixelColor(7, 0x000000)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.UntilDone)
    pins.servoWritePin(AnalogPin.C8, 0)
    motors.dualMotorPower(Motor.M0, 0)
    Alarm_ON = true
}
let Light_ON = false
let open_door = false
let Alarm_ON = false
let lights = 0
let set_temperature = 0
motors.dualMotorPower(Motor.M0, 0)
set_temperature = input.temperature()
modules.led4.setAll(0x000000)
lights = 0
makerbit.connectIrReceiver(DigitalPin.C14, IrProtocol.NEC)
radio.setGroup(1)
basic.forever(function () {
    serial.writeValue("x", input.temperature())
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (input.temperature() > set_temperature) {
        motors.dualMotorPower(Motor.M0, 10)
    } else {
        motors.dualMotorPower(Motor.M0, 0)
    }
    if (modules.distance4.distance() < 0.1 && Alarm_ON) {
        alarm()
    }
    if (input.buttonIsPressed(Button.B) || radio.receivedPacket(RadioPacketProperty.SerialNumber) == 1) {
        Temperatur()
    }
    if (input.buttonIsPressed(Button.A) || radio.receivedPacket(RadioPacketProperty.SerialNumber) == 2) {
        Temperatur2()
    }
    if (input.pinIsPressed(TouchPin.P3) || radio.receivedPacket(RadioPacketProperty.SerialNumber) == 3) {
        Tuer()
    }
    if (input.pinIsPressed(TouchPin.P2) || radio.receivedPacket(RadioPacketProperty.SerialNumber) == 24) {
        Licht()
    }
    if (input.pinIsPressed(TouchPin.P1) || pins.digitalReadPin(DigitalPin.C14) == 48) {
        AlarmONOFF()
    }
})
