value = 0
def on_button_pressed_b():
    radio.send_number(value)
input.on_button_pressed(Button.A, on_button_pressed_b)
#########################
def on_button_pressed_a():
    value = 0
    basic.show_string("A")
    value = value+1
    def on_button_pressed_b():
        radio.send_number(value)
    input.on_button_pressed(Button.B, on_button_pressed_b)
###################################################################33333333333333333
    basic.show_string("B")
    value = value+1
    def on_button_pressed_b():
        radio.send_number(value)
    input.on_button_pressed(Button.B, on_button_pressed_b)
##########################################################333333####33333
    basic.show_string("C")
    value = value+1
    def on_button_pressed_b():
        radio.send_number(value)
    input.on_button_pressed(Button.B, on_button_pressed_b)
#############################################################
    basic.show_string("D")
    value = value+1
    def on_button_pressed_b():
        radio.send_number(value)
    input.on_button_pressed(Button.B, on_button_pressed_b)
###############################################################33333333333333
input.on_button_pressed(Button.A, on_button_pressed_a)


#########################################################33333333333333333333

def on_received_number(receivedNumber):
    #basic.show_number(receivedNumber)
    if receivedNumber == 1:
        basic.show_string("A")
    if receivedNumber == 2:
        basic.show_string("B")
    if receivedNumber == 3:
        basic.show_string("C")
    if receivedNumber == 4:
        basic.show_string("D")
    if receivedNumber == 5:
        basic.show_string("E")
    if receivedNumber == 6:
        basic.show_string("F")
radio.on_received_number(on_received_number)
