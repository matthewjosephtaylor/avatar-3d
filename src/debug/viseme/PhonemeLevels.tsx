import React, { useEffect, useState } from "react";
import { initMeyda } from "../../humanoid/audio/calculateVisemeLevels";
import LevelGraph from "./LevelGraph";

interface PhonemeLevelsProps {
  analyserNode?: AnalyserNode;
}

const PhonemeLevels: React.FC<PhonemeLevelsProps> = ({ analyserNode }) => {
  const [phonemeData, setPhonemeData] = useState({} as Record<string, number>);

  useEffect(() => {
    if (!analyserNode) {
      return;
    }
    // const updateVisemes = () => {
    //   // const levels = calculateVisemeLevels(analyserNode);
    //   // setVisemeData(levels);
    // };
    // const anims = Animates.create({
    //   ticker: () => {
    //     updateVisemes();
    //   },
    // });

    const meydaAnalyzer = initMeyda(analyserNode, (phonemeLevels) => {
      setPhonemeData(phonemeLevels);
    });

    return () => {
      meydaAnalyzer.stop();
      // anims.destroy();
    };

    // const intervalId = setInterval(updateVisemes, 100); // Update every 100ms
    // return () => clearInterval(intervalId);
  }, [analyserNode]);

  return (
    <div style={{ maxHeight: "80vh", overflow: "auto" }}>
      {Object.entries(phonemeData).map(([viseme, value]) => (
        <LevelGraph key={viseme} name={viseme} value={value} />
      ))}
    </div>
  );
};

export default PhonemeLevels;