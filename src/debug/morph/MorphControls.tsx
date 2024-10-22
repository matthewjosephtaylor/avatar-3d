import React, { useEffect, useState } from 'react';
import MorphSlider from './MorphSlider';

interface MorphControlsProps {
  controls: Record<string, { min?: number; max?: number }>; // Range for each control
  defaultValues?: Record<string, number>;
  onChange: (updatedValues: Record<string, number>) => void;
}

const MorphControls: React.FC<MorphControlsProps> = ({ controls, defaultValues = {}, onChange }) => {
  const [controlValues, setControlValues] = useState<Record<string, number>>({});

  useEffect(() => {
    // Initialize default values
    const initialValues: Record<string, number> = {};
    Object.keys(controls).forEach((control) => {
      initialValues[control] = defaultValues[control] ?? 0; // Use default or 0
    });
    setControlValues(initialValues);
  }, [controls, defaultValues]);

  const handleSliderChange = (name: string, value: number) => {
    const newValues = { ...controlValues, [name]: value };
    setControlValues(newValues);
    onChange(newValues); // Notify parent component of change
  };

  return (
    <div>
      {Object.entries(controls).map(([name, { min = -2, max = 2 }]) => (
        <MorphSlider
          key={name}
          name={name}
          value={controlValues[name] ?? 0}
          min={min}
          max={max}
          onChange={handleSliderChange}
        />
      ))}
    </div>
  );
};

export default MorphControls;
