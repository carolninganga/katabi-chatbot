import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import './style.css'


class SimpleForm extends Component {
    render() {
        return (
            <>
        <h3>Welcome to Katabi Support Team</h3>
        <div className="chat"> 
        <ChatBot className="chatbot" style={{color: "blue"}}
            steps={[
                {
                    id: '1',
                    message: 'What is your name',
                    trigger: 'name',
                }
            ]}
                
            </>
        )
    }
}


export default SimpleForm;