import React, { useEffect, useState } from "react";
import VisemeGraph from "./VisemeGraph";
import { calculateVisemeLevels } from "../../humanoid/audio/calculateVisemeLevels";
import { Animates } from "@mjtdev/engine";

interface VisemeLevelsProps {
  analyserNode?: AnalyserNode;
}

const VisemeLevels: React.FC<VisemeLevelsProps> = ({ analyserNode }) => {
  const [visemeData, setVisemeData] = useState({
    aa: 0,
    ee: 0,
    ih: 0,
    oh: 0,
    ou: 0,
  });

  useEffect(() => {
    if (!analyserNode) {
      return;
    }
    const updateVisemes = () => {
      const levels = calculateVisemeLevels(analyserNode);
      setVisemeData(levels);
    };
    const anims = Animates.create({
      ticker: () => {
        updateVisemes();
      },
    });

    return () => {
      anims.destroy();
    };

    // const intervalId = setInterval(updateVisemes, 100); // Update every 100ms
    // return () => clearInterval(intervalId);
  }, [analyserNode]);

  return (
    <div>
      {Object.entries(visemeData).map(([viseme, value]) => (
        <VisemeGraph key={viseme} viseme={viseme} value={value} />
      ))}
    </div>
  );
};

export default VisemeLevels;
