# Chrome extension for viewing stuctured data types

- JSON (+)
- CSV (-)
- XML (-)

This Chrome extension enhances your browsing experience by providing on-the-fly JSON formatting for HTTP stream responses. If you frequently work with APIs that send JSON data as streamed responses, this extension will prove to be a valuable tool for you.

## Features

- **HTTP Stream Response Formatting**: This extension can capture stream data, validate its JSON structure, and present it in a human-readable format.
  
- **Error Handling**: In case the content cannot be parsed as valid JSON, the formatting process stops, ensuring that the browser display is not impacted by incorrect or unexpected data.
  
- **Futureproof**: I have plans to support more structured data types in the future.

## Installation

1. Clone the repository:
```bash
git clone [REPOSITORY_URL]
```
2. Navigate to `chrome://extensions/` in your Chrome browser.

3. Enable "Developer mode" and click on "Load unpacked".

4. Browse to the cloned repository's directory and select it.

5. The extension should now be installed and visible in your extensions list.

## Usage

Simply navigate to any website or service that sends HTTP stream responses in JSON format. The extension will automatically format the JSON content for you.

## Contribution

I welcome contributions to this project! Whether it's adding support for more structured data types, improving the formatting logic, or optimizing the performance, feel free to open a pull request or an issue.

## Feedback & Issues

If you come across any bugs or have suggestions for improvement, please open an issue in the repository. I would love to hear your feedback!

## License

[Apache 2.0](LICENSE)

## Credits
Developed by using the [Clyde D'Souza](https://clydedsouza.net/)'s [template](https://github.com/ClydeDz/chrome-extension-template)