// src/components/Chatbot.js

import React, { useState } from 'react';
import './chatbot.css'
const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [state, setState] = useState(null);
    const [resumeData, setResumeData] = useState({});

    const handleUserInput = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setMessages([...messages, { text: userMessage, sender: 'user' }]);
        setInput('');
        
        handleChatbotResponse(userMessage);
    };

    const handleChatbotResponse = (message) => {
        let response = '';
        if (message.toLowerCase() === "create resume from scratch") {
            setState("create_resume");
            response = "Great! Let's get started. Please provide your full name.";
        } else if (message.toLowerCase() === "choose template") {
            setState("choose_template");
            response = "Sure! Here are some templates you can choose from: [Template List]. Please select one by typing its number or name.";
        } else if (message.toLowerCase() === "upload old resume") {
            setState("upload_resume");
            response = "Please upload your old resume file here.";
        } else if (state === "create_resume") {
            handleCreateResumeFlow(message);
            return;
        } else if (state === "choose_template") {
            response = `You have selected ${message}. Let's proceed.`;
        } else if (state === "upload_resume") {
            response = "Your resume has been uploaded. We will now process it.";
        } else {
            response = "I didn't understand that. Please choose one of the following options: create resume from scratch, choose template, upload old resume.";
        }

        setMessages([...messages, { text: response, sender: 'bot' }]);
    };

    const handleCreateResumeFlow = (message) => {
        let response = '';
        if (!resumeData.full_name) {
            setResumeData({ ...resumeData, full_name: message });
            response = "Please provide your contact details.";
        } else if (!resumeData.contact_details) {
            setResumeData({ ...resumeData, contact_details: message });
            response = "Please provide your education details.";
        } else {
            response = "Thank you! Your resume details have been saved.";
        }

        setMessages([...messages, { text: response, sender: 'bot' }]);
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
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
