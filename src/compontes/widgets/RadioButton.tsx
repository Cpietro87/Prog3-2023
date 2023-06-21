import React, { ChangeEvent, useState } from 'react';

interface RadioButtonProps {
  options: string[];
}

const RadioButton: React.FC<RadioButtonProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div>
        {options.map((option, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioButtonOptions"
              id={`radioButtonOption${index}`}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label className="form-check-label" htmlFor={`radioButtonOption${index}`}>
              {option}
            </label>
          </div>
        ))}
      </div>
    );
  };
  
  export {};
  
  export default RadioButton;