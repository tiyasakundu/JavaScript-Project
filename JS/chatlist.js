
        // Assuming user name is stored in localStorage
        const userName = localStorage.getItem('loggedInName');
        const chats = JSON.parse(localStorage.getItem('chats')) || [];
        const chatListDiv = document.getElementById('chat-list');

        // Function to display chat messages
        function displayChats() {
            chatListDiv.innerHTML = ''; // Clear existing chat messages
            chats.forEach(chat => {
                const chatItem = document.createElement('div');
                chatItem.classList.add('chat-message');

                // Determine if the message is incoming or outgoing
                if (chat.user === userName) {
                    chatItem.classList.add('outgoing');
                } else {
                    chatItem.classList.add('incoming');
                }

                chatItem.innerHTML = `<p>${chat.user} (${chat.timestamp}): ${chat.message}</p>`;
                chatListDiv.appendChild(chatItem);
            });
            chatListDiv.scrollTop = chatListDiv.scrollHeight; // Auto-scroll to the latest message
        }

        displayChats(); // Display chats on load

        document.getElementById('chat-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const message = document.getElementById('message').value;
            const timestamp = new Date().toLocaleString();

            chats.push({ user: userName, message, timestamp });
            localStorage.setItem('chats', JSON.stringify(chats));
            document.getElementById('message').value = ''; // Clear the input field
            displayChats(); // Update chat display
        });

        document.getElementById('refresh-btn').addEventListener('click', function () {
            displayChats(); // Refresh the chat display
        });
    