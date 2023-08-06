import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [currentStep, setcurrentStep] = useState(1);
  // let currentStep = 1;
  const handlePrevious = () => {
    if (currentStep > 1) {
      setcurrentStep(() => currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setcurrentStep(() => currentStep + 1);
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={currentStep >= 1 ? 'active' : ''}>1</div>
        <div className={currentStep >= 2 ? 'active' : ''}>2</div>
        <div className={currentStep >= 3 ? 'active' : ''}>3</div>
      </div>
      <p className="message">
        Step : {currentStep} {messages[currentStep - 1]}
      </p>

      <div className="buttons">
        <button className="btn" onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
