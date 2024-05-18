import React from 'react';
import TextHighlighter from './TextHighlighter';

function App() {
    const sampleText = `
        Hello! My name is Mounika, and I am a software engineer with over a decade of experience in the technology industry.
        I specialize in full-stack development, working with a wide array of technologies including JavaScript, React, Node.js, and MongoDB.
        In my spare time, I enjoy contributing to open-source projects, participating in hackathons, and writing technical blogs to share knowledge with the developer community.
        I'm passionate about continuous learning and always eager to explore new advancements in the tech world. Throughout my career, I have worked on various projects that range from small business websites to large-scale enterprise applications.
        My role typically involves everything from designing the architecture of the system to writing the code and ensuring the application is robust and scalable.
        I believe in writing clean, maintainable code and always strive to follow best practices and design patterns. One of the projects I am most proud of involved developing a complex e-commerce platform that handled thousands of transactions daily.
        This project required close collaboration with other developers, designers, and stakeholders to ensure that all requirements were met and that the platform was user-friendly and performant.
        In addition to my technical skills, I also place a high value on soft skills such as communication, teamwork, and problem-solving. I enjoy mentoring junior developers and sharing my knowledge to help them grow in their careers.
        Outside of work, I have a variety of hobbies and interests. I love traveling and exploring new places, which allows me to experience different cultures and cuisines.
        I am also an avid reader and enjoy books on a wide range of topics, from technology and science fiction to history and personal development.
        Another passion of mine is fitness, and I make it a point to stay active by going to the gym regularly and participating in outdoor activities like hiking and cycling.
        Overall, I am a dedicated and enthusiastic software engineer who is always looking for new challenges and opportunities to learn and grow.
    `;

    return (
        <div className="App">
            <h1>Text Highlighter</h1>
            <TextHighlighter text={sampleText} />
        </div>
    );
}

export default App;
