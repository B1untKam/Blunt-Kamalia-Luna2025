const body = document.querySelector('body');
const footer = document.createElement('footer');
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const footerElement = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Kamalia Blunt © ${thisYear}`;
footerElement.appendChild(copyright);

const skills = [
    "Employee Survey Strategy", 
    "Survey Platforms (Qualtrics, Microsoft Forms, Google Forms)", 
    "Data Analysis & Storytelling", 
    "Employee Experience", 
    "Change Management", 
    "Stakeholder Engagement", 
    "Supervisory Authority", 
    "Administrative Functions", 
    "Public Service", 
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