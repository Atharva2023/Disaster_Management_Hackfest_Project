// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.getElementById('chat-window');
    const messageText = document.getElementById('message-text');
    const sendButton = document.getElementById('send-button');

    function addMessage(text, isSent) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (isSent) {
            messageElement.classList.add('sent');
        }
        messageElement.textContent = text;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function sendMessage() {
        const message = messageText.value.trim();
        if (message) {
            addMessage(message, true);
            messageText.value = '';
            // Here you would typically send the message to a server
            // For now, we'll just simulate a response
            setTimeout(() => {
                addMessage("Thanks for your message!", false);
            }, 1000);
        }
    }

    sendButton.addEventListener('click', sendMessage);

    messageText.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Simulating initial messages
    setTimeout(() => addMessage("Welcome to the community messaging platform!", false), 500);
    setTimeout(() => addMessage("Feel free to start chatting with other community members.", false), 1500);
});
