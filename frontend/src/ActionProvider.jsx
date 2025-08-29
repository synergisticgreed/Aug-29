// ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("Hello! 👋 Nice to meet you.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  defaultResponse() {
    const message = this.createChatBotMessage("Sorry, I didn’t understand that 🤔");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
