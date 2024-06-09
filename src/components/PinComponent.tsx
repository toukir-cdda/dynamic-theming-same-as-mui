'use client';

import React, { useState, useRef } from 'react';

const PinInput = ({ numDigits = 4 }) => {
  const [pinValue, setPinValue] = useState(Array(numDigits).fill(''));
  const inputRefs = useRef([] as any);

  //   here we are handling the change event to update the pin value and move the focus to the next input field
  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const regex = new RegExp(`^\\d{0,${numDigits}}$`);

    if (regex.test(value) || value === '') {
      const newPinValue = [...pinValue];
      newPinValue[index] = value;
      setPinValue(newPinValue);
      if (value !== '') {
        const nextIndex = Math.min(index + 1, numDigits - 1);
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  //   here we are handling the paste event to paste the value in the input field
  const handlePinPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedValue = e.clipboardData.getData('text').slice(0, numDigits);
    const regex = new RegExp(`^\\d{0,${numDigits}}$`);

    if (regex.test(pastedValue)) {
      setPinValue(pastedValue.split(''));
      e.preventDefault();
    }
  };

  //   here we are handling the backspace key press to move the focus to the previous input field
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0 && pinValue[index] === '') {
      const newPinValue = [...pinValue];
      newPinValue[index - 1] = '';
      setPinValue(newPinValue);
      inputRefs.current[index - 1].focus();
    }
  };

  //  here we are rendering the input fields for the pin based on the number of digits
  const renderPinInputs = () => {
    return pinValue.map((value, index) => (
      <input
        className="border border-gray-300 w-10 h-10 text-center mx-1"
        key={index}
        ref={(ref) => (inputRefs.current[index] = ref)}
        type="text"
        value={value}
        onChange={(e) => handlePinChange(e, index)}
        onPaste={handlePinPaste}
        onKeyDown={(e) => handleKeyDown(e, index)}
        maxLength={1}
      />
    ));
  };

  return <div>{renderPinInputs()}</div>;
};

export default PinInput;
