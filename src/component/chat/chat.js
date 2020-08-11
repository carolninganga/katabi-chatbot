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
                { value: 'how do I navigate once I enter the VR room', label: 'How do I navigate once I enter the VR room', trigger: '5' },
                { value: 'how do I send an email to the katabi team?', label: 'How do I send an email to the katabi team?', trigger: '6' },
              ]
          },
          {
            id: '4',
            message: 'select from the options on the homepage which room to enter a VR room',
            trigger: '7'
          },
          {
            id: '5',
            message: 'Use the arrow keys and the mouse to move the Avatar',
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