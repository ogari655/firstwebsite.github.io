const conversation = document.getElementById('conversation');
const knowledgeBase = new Map();
const userResponses = {};

// Populate the knowledgeBase with some initial data
const initialData = [
  { question: "Hello", response: "Hi there!" },
  { question: "What can you do?", response: "I can chat with you!" },
  { question: "How are you?", response: "I'm doing well, thank you for asking!" },
  { question: "Tell me a joke", response: "Why did the scarecrow get promoted? Because he was outstanding in his field!" },
  { question: "What's your name?", response: "My name is Cleveland!" },
  { question: "Goodbye", response: "Have a great day!" },
];

initialData.forEach((item) => {
  const lowercaseQuestion = item.question.toLowerCase();
  const variations = generateVariations(item.question);

  knowledgeBase.set(lowercaseQuestion, { ...item, question: lowercaseQuestion, variations });

  variations.forEach((variation) => {
    const lowercaseVariation = variation.toLowerCase();
    knowledgeBase.set(lowercaseVariation, { ...item, question: lowercaseVariation, variations });
  });
});

let lastChatbotMessage = '';

function sendMessage(
) {
  const message = document.getElementById('message').value.toLowerCase();
  conversation.innerHTML += `<label>You:</label> ${message}<br>`;

  checkUserResponse(message);
}

function respond(responseObj) {
  lastChatbotMessage = responseObj.question;
  conversation.innerHTML += `<label>Cleveland:</label> ${responseObj.response}<br>`;

  if (responseObj.context) {
    conversation.innerHTML += `<label>Cleveland:</label> ${responseObj.context}<br>`;
  }
}

function generateVariations(question) {
  const variations = [
    question.replace(/'/g, ''), // Remove apostrophes
question.replace(/e/g, 'a'), // Common typo (e.g., "whats" instead of "what's")
// Add more common typos or variations here
];

  return variations;
}

function checkUserResponse(userQuestion) {
  const lowercaseUserQuestion = userQuestion.toLowerCase();

  if (userResponses[lowercaseUserQuestion]) {
    respond({ question: lowercaseUserQuestion, response: userResponses[lowercaseUserQuestion] });
  } else if (knowledgeBase.has(lowercaseUserQuestion)) {
    respond(knowledgeBase.get(lowercaseUserQuestion));
  } else {
    const variations = generateVariations(lowercaseUserQuestion);
    for (const variation of variations) {
      const lowercaseVariation = variation.toLowerCase();
      if (userResponses[lowercaseVariation]) {
        respond({ question: lowercaseVariation, response: userResponses[lowercaseVariation] });
        return;
      }
      if (knowledgeBase.has(lowercaseVariation)) {
        respond(knowledgeBase.get(lowercaseVariation));
        return;
      }
    }

    if (lastChatbotMessage === lowercaseUserQuestion) {
      const userResponse = prompt('Please provide more information or a response for this question: ' + lastChatbotMessage);

      if (userResponse) {
        const updatedResponse = { ...knowledgeBase.get(lastChatbotMessage), context: userResponse };
        knowledgeBase.set(lastChatbotMessage, updatedResponse);
        userResponses[lastChatbotMessage] = userResponse;
        return;
      }
    }

    respond('I don\'t understand. Can you ask me something else?');
  }
}
