//footer
const body = document.querySelector('body');
const footer = document.createElement('footer');
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const footerElement = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Kamalia Blunt © ${thisYear}`;
footerElement.appendChild(copyright);

// Skills array and display
const skills = [
    "Employee Survey Strategy", 
    "Survey Platforms (Qualtrics, Microsoft Forms, Google Forms)", 
    "Data Analysis & Storytelling", 
    "Employee Experience", 
    "Change Management", 
    "JavaScript",
    "Stakeholder Engagement", 
    "Supervisory Authority", 
    "Administrative Functions", 
    "Public Health Initiatives", 
    "Training & Development", 
    "Data Management", 
    "Communication Excellence"
];

const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// Message form
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
    // Prevent default behavior
    event.preventDefault();
    
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    
    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);
    
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    
    newMessage.appendChild(removeButton);
    
    messageList.appendChild(newMessage);
    
    messageForm.reset();
});