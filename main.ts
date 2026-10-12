serial.redirectToUSB()
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    serial.writeValue("x", input.acceleration(Dimension.Strength))
})
