import React from 'react';

interface MorphSliderProps {
  name: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (name: string, value: number) => void;
}

const MorphSlider: React.FC<MorphSliderProps> = ({ name, value, min = -2, max = 2, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(name, newValue);
  };

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type="range"
        id={name}
        name={name}
        min={min}
        max={max}
        step={0.01}
        value={value}
        onChange={handleChange}
      />
      <span>{value.toFixed(2)}</span>
    </div>
  );
};

export default MorphSlider;
