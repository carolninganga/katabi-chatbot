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
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What question would you like to ask me?',
            trigger: 'question'
            // trigger: 'gender',
          },
          {
            id : 'question',
            options: [
                { value: 'how to use this app?', label: 'How to use this app?', trigger: '4' },
                { value: 'how do I preview a virtual reality room?', label: 'How do I preview a virtual reality room?', trigger: '5' },
                { value: 'how do I send an email to the katabi team?', label: 'How do I send an email to the katabi team?', trigger: '6' },
              ]
          },
          {
            id: '4',
            message: 'enter your fav food and location in the specified fields',
            trigger: '7'
          },
          {
            id: '5',
            message: 'Click saved on the navbar',
            trigger: '7',
          },
          {
            id: '6',
            message: 'Go to saved and click delete',
            trigger: '7',
          },
        
          {
            id: '7',
            message: 'Was this helpful?',
            trigger: 'answer',
          },
          {
            id: 'answer',
            options: [
                { value: 'yes', label: 'Yes?', trigger: '8' },
                { value: 'no', label: 'No', trigger: '9' },
              ]
          },
          {
            id: '8',
            message: 'Thank you for using Skill Share Squad, have a nice day!!',
            end: true,
          },
          {
            id: '9',
            message: 'Thats too bad but I cannot help you anymore ',
            end: true,
          }
        ]}
      />

      <button className="btn"><a href="https://foodie03.herokuapp.com/">
            Home
        </a></button>
      </div>
      </>
    );
  }
}

export default SimpleForm;