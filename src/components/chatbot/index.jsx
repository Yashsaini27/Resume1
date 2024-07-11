import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [awaitingOption, setAwaitingOption] = useState(false);

    const handleUserInput = (e) => {
        e.preventDefault();
        const userInput = e.target.elements.userInput.value.trim();

        if (userInput === '') return;

        // Add user message
        setMessages(prevMessages => [...prevMessages, { text: userInput, sender: 'user' }]);
        
        // Handle bot response based on user input
        const normalizedInput = userInput.toLowerCase();
        if (normalizedInput === 'hii') {
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'hii', sender: 'bot' },
                    { text: 'How can I help you?', sender: 'bot' }
                ]);
            }, 500);
        } else if (normalizedInput === 'i want to create resume') {
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Select from the following options:', sender: 'bot' },
                    { text: '1. Choose Template', sender: 'bot' },
                    { text: '2. Create Resume', sender: 'bot' }
                ]);
                setAwaitingOption(true);
            }, 500);
        } else if (awaitingOption) {
            handleOptionSelection(normalizedInput);
        }

        // Clear input field
        e.target.elements.userInput.value = '';
    };

    const handleOptionSelection = (option) => {
        setAwaitingOption(false);
        if (option === '1' || option === 'choose template') {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: <Link to="/templete">You selected "Choose Template". Click here to select a template.</Link>, sender: 'bot' }
            ]);
        } else if (option === '2' || option === 'create resume') {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: 'You selected "Create Resume".', sender: 'bot' }
            ]);
        } else {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: 'Invalid option. Please select "1. Choose Template" or "2. Create Resume".', sender: 'bot' }
            ]);
            setAwaitingOption(true);
        }
    };

    return (
        <div className="chatbot">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleUserInput}>
                <input
                    type="text"
                    name="userInput"
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
