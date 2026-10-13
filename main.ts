serial.redirectToUSB()
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    serial.writeNumber(input.acceleration(Dimension.Strength))
    serial.writeLine("")
    basic.pause(100)
})
