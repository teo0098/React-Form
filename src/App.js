import React from 'react';
import './App.css';
import Form1 from './Form1/Form1';
import Form2 from './Form2/Form2';
import Form3 from './Form3/Form3';

const App = () => {
  return (
    <div className="App">
      <header className="App__header">
        <h2 className="App__h2">Create account</h2>
      </header>
      <section className="App__section">
        <Form3 />
      </section>
    </div>
  );
}

export default App;
