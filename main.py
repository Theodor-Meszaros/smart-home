def on_button_a():
    global set_temperature
    set_temperature += -1
    basic.show_number(set_temperature)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    global set_temperature
    set_temperature += 1
    basic.show_number(set_temperature)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_sound_loud():
    pass
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_pin_touch_p3():
    global open_door
    open_door = not (open_door)
    if open_door:
        basic.show_leds("""
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            # . . . .
            # # . . .
            # . # . .
            # . . # .
            # . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            # . . . .
            # # # # .
            # . . . .
            # . . . .
            # . . . .
            """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        music._play_default_background(music.built_in_playable_melody(Melodies.JUMP_UP),
            music.PlaybackMode.UNTIL_DONE)
        pins.servo_write_pin(AnalogPin.C8, 90)
    else:
        basic.show_leds("""
            # . . . .
            # # # # .
            # . . . .
            # . . . .
            # . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            # . . . .
            # # . . .
            # . # . .
            # . . # .
            # . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        music._play_default_background(music.built_in_playable_melody(Melodies.JUMP_DOWN),
            music.PlaybackMode.UNTIL_DONE)
        pins.servo_write_pin(AnalogPin.C8, 0)
input.on_pin_touch_event(TouchPin.P3, input.button_event_down(), on_pin_touch_p3)

open_door = False
set_temperature = 0
motors.dual_motor_power(Motor.M0, 0)
set_temperature = input.temperature()
modules.led4.set_brightness(100)
modules.led4.set_pixel_color(1, 0xff0000)
modules.led4.set_pixel_color(2, 0xff8000)
modules.led4.set_pixel_color(3, 0xffff00)
modules.led4.set_pixel_color(4, 0x00ff00)
modules.led4.set_pixel_color(5, 0x0000ff)
modules.led4.set_pixel_color(6, 0xff00ff)
modules.led4.set_pixel_color(7, 0x00ffff)
modules.led4.set_pixel_color(0, 0xb09eff)

def on_forever():
    serial.write_value("x", input.temperature())
    if input.temperature() > set_temperature:
        motors.dual_motor_power(Motor.M0, 10)
    else:
        motors.dual_motor_power(Motor.M0, 0)
basic.forever(on_forever)
