const conversation = document.getElementById('conversation');
const knowledgeBase = new Map();

// Populate the knowledgeBase with some initial data
const initialData = [
  { question: "Hello", response: "Hi there!" },
  { question: "What can you do?", response: "I can chat with you!" },
  { question: "How are you?", response: "I'm doing well, thank you for asking!" },
  { question: "Tell me a joke", response: "Why did the scarecrow get promoted? Because he was outstanding in his field!" },
  { question: "What's your name?", response: "My name is Cleveland!" },
  { question: "Goodbye", response: "Have a great day!" },
];

initialData.forEach((item) => knowledgeBase.set(item.question, item));

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

function respond(responseObj) {
  lastChatbotMessage = responseObj.question;
  conversation.innerHTML += `<label>Cleveland:</label> ${responseObj.response}<br>`;

  if (responseObj.context) {
    conversation.innerHTML += `<label>Cleveland:</label> ${responseObj.context}<br>`;
  }

  if (lastChatbotMessage === responseObj.question) {
    const userResponse = prompt('Please provide more information or a response for this question: ' + lastChatbotMessage);

    if (userResponse) {
      const updatedResponse = { ...responseObj, context: userResponse };
      knowledgeBase.set(lastChatbotMessage, updatedResponse);
      conversation.innerHTML += `<label>Cleveland:</label> ${userResponse}<br>`;
    }
  }
}

    conversation.innerHTML += `<label>Cleveland:</label> ${existingResponse}<br>`;
  } else if (message === 'How can I help you?') {
    // Do not ask for user input when the chatbot asks a question first
} else if (message === lastChatbotMessage) {
    // If the chatbot's last message is the same, prompt the user for more information
const userResponse = prompt('Please provide more information or a response for this question: ' + message);
    if (userResponse) {
      knowledgeBase.set(message, userResponse);
      conversation.innerHTML += `<label>Cleveland:</label> ${userResponse}<br>`;
    }
  }
}
