const chatInput = document.getElementById('chat-input');
const chatLog = document.getElementById('chat-log');

chatInput.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        const msg = chatInput.value.trim();
        if(msg === '') return;
        const userMsg = document.createElement('div');
        userMsg.textContent = 'You: ' + msg;
        chatLog.appendChild(userMsg);

        const botMsg = document.createElement('div');
        botMsg.textContent = 'AI: I am a demo chatbot.';
        chatLog.appendChild(botMsg);

        chatInput.value = '';
        chatLog.scrollTop = chatLog.scrollHeight;
    }
});
