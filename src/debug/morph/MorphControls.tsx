import { isDefined } from "@mjtdev/engine";
import { useEffect, useState } from "react";
import {
  initMeyda,
  type PhonemeLevels,
} from "../../humanoid/audio/calculateVisemeLevels";
import MorphSlider from "./MorphSlider";
import { Button } from "@mui/material";

const MorphControls = ({
  controls,
  defaultValues = {},
  onChange,
  analyserNode,
}: {
  controls: Record<string, { min?: number; max?: number }>; // Range for each control
  defaultValues?: Record<string, number>;
  onChange: (updatedValues: Record<string, number>) => void;
  analyserNode?: AnalyserNode;
}) => {
  const [controlValues, setControlValues] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    if (!analyserNode) {
      console.warn("No analyser node provided for MorphControls");
      return;
    }
    // Initialize default values
    const initialValues: Record<string, number> = {};
    Object.keys(controls).forEach((control) => {
      initialValues[control] = defaultValues[control] ?? 0; // Use default or 0
    });
    setControlValues(initialValues);

    const meydaAnalyzer = initMeyda(analyserNode, (levels) => {
      const updatedControls: Record<string, number> = {};

      for (const control of Object.keys(controls)) {
        const levelKey = control
          .replace("eCTRLv", "")
          .toLocaleUpperCase() as keyof PhonemeLevels;
        const level = levels[levelKey];
        // console.log(`level: ${levelKey} ${control}`, level);
        if (isDefined(level)) {
          updatedControls[control] = Math.max(0, level * 0.2);
        }
      }
      setControlValues((s) => ({ ...s, ...updatedControls }));
      onChange(updatedControls); // Notify parent component of change
    });

    return () => {
      meydaAnalyzer.stop();
    };
  }, [controls, defaultValues, analyserNode]);

  const handleSliderChange = (name: string, value: number) => {
    const newValues = { ...controlValues, [name]: value };
    setControlValues(newValues);
    onChange(newValues); // Notify parent component of change
  };

  return (
    <div style={{ maxHeight: "80vh", overflow: "auto" }}>
      CONTROLS
      <Button
        onClick={() => {
          const initialValues: Record<string, number> = {};
          Object.keys(controls).forEach((control) => {
            initialValues[control] = defaultValues[control] ?? 0; // Use default or 0
          });
          setControlValues(initialValues);
          onChange(initialValues);
        }}
      >
        Reset
      </Button>
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
