// MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("hello")) {
      this.actionProvider.greet();
    } else {
      this.actionProvider.defaultResponse();
    }
  }
}

export default MessageParser;
