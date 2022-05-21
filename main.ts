let value = 0
input.onButtonPressed(Button.A, function on_button_pressed_b() {
    radio.sendNumber(value)
})
// ########################
// ##############################################################33333333333333
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let value = 0
    basic.showString("A")
    value = value + 1
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        radio.sendNumber(value)
    })
    // ##################################################################33333333333333333
    basic.showString("B")
    value = value + 1
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        radio.sendNumber(value)
    })
    // #########################################################333333####33333
    basic.showString("C")
    value = value + 1
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        radio.sendNumber(value)
    })
    // ############################################################
    basic.showString("D")
    value = value + 1
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        radio.sendNumber(value)
    })
})
// ########################################################33333333333333333333
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    // basic.show_number(receivedNumber)
    if (receivedNumber == 1) {
        basic.showString("A")
    }
    
    if (receivedNumber == 2) {
        basic.showString("B")
    }
    
    if (receivedNumber == 3) {
        basic.showString("C")
    }
    
    if (receivedNumber == 4) {
        basic.showString("D")
    }
    
    if (receivedNumber == 5) {
        basic.showString("E")
    }
    
    if (receivedNumber == 6) {
        basic.showString("F")
    }
    
})
