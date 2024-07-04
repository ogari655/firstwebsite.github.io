const conversation = document.getElementById('conversation');
const knowledgeBase = new Map();

// Populate the knowledgeBase with some initial data
knowledgeBase.set("Hello", "Hi there!");
knowledgeBase.set("What can you do?", "I can chat with you!");
knowledgeBase.set("How are you?", "I'm doing well, thank you for asking!");
knowledgeBase.set("Tell me a joke", "Why did the scarecrow get promoted? Because he was outstanding in his field!");
knowledgeBase.set("What's your name?", "My name is Cleveland!");
knowledgeBase.set("Goodbye", "Have a great day!");

function sendMessage(
) {
  const message = document.getElementById('message').value;
  conversation.innerHTML += `<label>You:</label> ${message}<br>`;

  if (knowledgeBase.has(message)) {
    respond(knowledgeBase.get(message));
  } else {
    // Check the user's message and respond accordingly
if (message === 'Hello') {
      respond('Hi there!');
    } else if (message === 'What can you do?') {
      respond('I can chat with you!');
    } else if (message === 'How are you?') {
      respond('I\'m doing well, thank you for asking!');
    } else if (message === 'Tell me a joke') {
      respond('Why did the scarecrow get promoted? Because he was outstanding in his field!');
    } else if (message === 'What\'s your name?') {
      respond('My name is Cleveland!');
    } else if (message === 'Goodbye') {
      respond('Have a great day!');
    } else {
      respond('I don\'t understand. Can you ask me something else?');
    }
  }
}

function respond(message) {
  conversation.innerHTML += `<label>Cleveland:</label> ${message}<br>`;

  const userResponse = prompt('Please provide more information or a response for this question: ' + message);

  if (userResponse) {
    knowledgeBase.set(message, userResponse);
  }
}

    } else {
      respond('I don\'t understand. Can you ask me something else?');
    }
  }
}

function respond(message) {
  conversation.innerHTML += `<label>Cleveland:</label> ${message}<br>`;

  const userResponse = prompt('Please provide more information or a response for this question: ' + message);

  if (userResponse) {
    knowledgeBase.set(message, userResponse);
  }
}
