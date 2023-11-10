# Web Serial Debugger

Web Serial Debugger is a web-based tool for serial communication using the Web Serial API. It allows you to connect to a serial port, send and receive data, and visualize the communication in real-time.

[Try it out](https://honoka55.github.io/web-serial-debugger/)

## Features

- Connect to a serial port and configure parameters (baud rate, stop bits, data bits, parity).
- Send and display data in both text and hexadecimal formats.
- Real-time display of received data.
- Timestamping option for received data.
- Save received data to a text file.
- Clear output display.
- Simple and intuitive user interface.

## Getting Started

1. Ensure that your browser supports the Web Serial API.
2. Open `index.html` in a compatible browser.
3. Select the desired serial port parameters.
4. Click the “Connect” button to establish a serial connection.
5. Send and receive data using the provided controls.

## Configuration Options

- **Baud Rate:** Select the baud rate for serial communication.
- **Stop Bits:** Choose the number of stop bits.
- **Data Bits:** Choose the number of data bits.
- **Parity:** Select the parity option (none, odd, even).
- **Encoding:** Choose the text encoding (UTF-8, GBK, Big5, Shift JIS, EUC-KR).
- **Display Format:** Choose the display format (text or hexadecimal).
- **Newline:** Select the newline character for formatting.

## Usage

- Click the “Send” button to send data from the input field.
- Use the “Save” button to save the received data to a text file.
- Click the “Clear” button to clear the output display.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

If you encounter any issues or have suggestions for improvement, feel free to [open an issue](https://github.com/Honoka55/web-serial-debugger/issues).
