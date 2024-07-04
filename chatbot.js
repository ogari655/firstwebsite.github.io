const conversation = document.getElementById('conversation');
const knowledgeBase = new Map();

// Populate the knowledgeBase with some initial data
knowledgeBase.set("Hello", "Hi there!");
knowledgeBase.set("What can you do?", "I can chat with you!");
knowledgeBase.set("How are you?", "I'm doing well, thank you for asking!");
knowledgeBase.set("Tell me a joke", "Why did the scarecrow get promoted? Because he was outstanding in his field!");
knowledgeBase.set("What's your name?", "My name is Cleveland!");
knowledgeBase.set("Goodbye", "Have a great day!");

let lastChatbotMessage = '';

function sendMessage(
) {
  const message = document.getElementById('message').value;
  conversation.innerHTML += `<label>You:</label> ${message}<br>`;

  if (knowledgeBase.has(message)) {
    respond(knowledgeBase.get(message));
  } else {
    respond('I don\'t understand. Can you ask me something else?');
  }
}

function respond(message) {
  lastChatbotMessage = message;
  conversation.innerHTML += `<label>Cleveland:</label> ${message}<br>`;

  // Check if a response already exists in the knowledgeBase
const existingResponse = knowledgeBase.get(message);
  if (existingResponse) {
    conversation.innerHTML += `<label>Cleveland:</label> ${existingResponse}<br>`;
  } else if (message === 'How can I help you?') {
    // Do not ask for user input when the chatbot asks a question first
} else {
    const userResponse = prompt('Please provide more information or a response for this question: ' + message);

    if (userResponse) {
      knowledgeBase.set(message, userResponse);
      conversation.innerHTML += `<label>Cleveland:</label> ${userResponse}<br>`;
    }
  }
}
