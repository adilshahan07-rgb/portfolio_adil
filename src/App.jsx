import React from 'react';

export default function App() {
  return (
    <main style={{maxWidth: 900, margin: '0 auto', padding: 24, fontFamily: 'system-ui, sans-serif'}}>
      <header>
        <h1>Adil Shahan</h1>
        <p>Aspiring Full-Stack Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>I am an AIML student at Yenepoya Institution (3rd semester). I enjoy building web apps and learning full-stack development. Currently focusing on React and Vite.</p>
      </section>

      <section>
        <h2>Hobbies & Interests</h2>
        <ul>
          <li><strong>Reading:</strong> I like to read in free time.</li>
          <li><strong>Gym/Fitness:</strong> I like to stay fit.</li>
          <li><strong>Coding Projects:</strong> I like to code.</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript / React</li>
          <li>HTML & CSS</li>
          <li>Git / GitHub</li>
        </ul>
      </section>
    </main>
  );
}