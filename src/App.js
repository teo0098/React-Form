import React, { useState } from 'react';
import './App.css';
import Form1 from './Form1/Form1';
import Form2 from './Form2/Form2';
import Form3 from './Form3/Form3';
import { Transition } from 'react-spring/renderprops'

const App = () => {
  const [form, setForm] = useState(0);

  const goNext = () => {
    setForm(prevstate => {
      if (prevstate < 2) setForm(++prevstate);
    })
  }

  const goPrev = () => {
    setForm(prevstate => {
      if (prevstate > 0) setForm(--prevstate);
    })
  }

  const forms = [<Form1 goNext={goNext} />, 
                <Form2 goNext={goNext} goPrev={goPrev} />, 
                <Form3 goPrev={goPrev} />];

  return (
    <div className="App">
      <header className="App__header">
        <h2 className="App__h2">Create account</h2>
      </header>
      <section className="App__section">
        <Transition
          items={form}
          from={{ transform: 'translate3d(20vw, 10vh, -100vw) scale(0.5)', opacity: 0 }}
          enter={{ transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1 }}
          leave={{ transform: 'translate3d(-20vw, 10vh, -100vw) scale(0.5)', opacity: 0 }}
          config={{ duration: 600 }}
        >
          {form => (props => 
            <div className="animation" style={props}>
              {forms[form]}
            </div>  
          )}
        </Transition>
      </section>
    </div>
  );
}

export default App;