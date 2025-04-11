var SerialPort = require("serialport");

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimeter: "\r\n"
});

var port = new SerialPort('');