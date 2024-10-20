type VisemeLevels = {
  aa: number;
  ee: number;
  ih: number;
  oh: number;
  ou: number;
};

// Helper function for calculating average energy in a frequency range
const getFrequencyBandEnergy = (start: number, end: number, dataArray: Float32Array, gain: number = 1): number => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += dataArray[i];
  }
  return (sum / (end - start + 1)) * gain; // Amplify based on gain
};

// Helper function for calculating the time-domain envelope (broad mouth opening)
const getAmplitudeEnvelope = (dataArray: Float32Array, gain: number = 1): number => {
  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) {
    sum += Math.abs(dataArray[i]);
  }
  return (sum / dataArray.length) * gain; // Amplify based on gain
};

// Function to calculate viseme levels based on time and frequency domain
export function calculateVisemeLevels(analyserNode: AnalyserNode): VisemeLevels {
  const bufferLength = analyserNode.frequencyBinCount;
  const timeDomainData = new Float32Array(bufferLength);
  const frequencyData = new Float32Array(bufferLength);

  // Get the time-domain data (amplitude)
  analyserNode.getFloatTimeDomainData(timeDomainData);

  // Get the frequency-domain data (FFT)
  analyserNode.getFloatFrequencyData(frequencyData);

  // Frequency ranges for visemes (adjusted based on expected phoneme ranges)
  const lowFreqRange = [0, 2] as const; // ~0-43 Hz for 'aa'
  const midFreqRange = [3, 7] as const; // ~64-150 Hz for 'oh'
  const midHighFreqRange = [8, 14] as const; // ~172-300 Hz for 'ih'
  const highFreqRange = [15, 23] as const; // ~322-500 Hz for 'ee'
  const lowHighMixRange = [[0, 2], [15, 23]] as const; // Low + High for 'ou'

  // Adjust the gain to amplify lower input levels
  const gain = 4.0; // Adjust the gain factor for sensitivity to normal speech levels

  // Calculate viseme levels based on energy
  const aaLevel = getAmplitudeEnvelope(timeDomainData, gain); // Time-domain for broad mouth opening
  const eeLevel = getFrequencyBandEnergy(...highFreqRange, frequencyData, gain) / 255;
  const ihLevel = getFrequencyBandEnergy(...midHighFreqRange, frequencyData, gain) / 255;
  const ohLevel = getFrequencyBandEnergy(...midFreqRange, frequencyData, gain) / 255;

  // For 'ou', combine low and high frequencies
  const ouLowEnergy = getFrequencyBandEnergy(...lowHighMixRange[0], frequencyData, gain);
  const ouHighEnergy = getFrequencyBandEnergy(...lowHighMixRange[1], frequencyData, gain);
  const ouLevel = Math.max(0, (ouLowEnergy + ouHighEnergy) / 510); // Normalize combined bands

  // Return the calculated viseme levels, capped at 1
  return {
    aa: Math.min(aaLevel, 1),
    ee: Math.min(eeLevel, 1),
    ih: Math.min(ihLevel, 1),
    oh: Math.min(ohLevel, 1),
    ou: Math.min(ouLevel, 1),
  };
}

// Example function for getting microphone input and processing visemes
// export const getMicAudio = async (processVisemeLevels: (visemeLevels: VisemeLevels) => void) => {
//   const audioCtx = new AudioContext();

//   // Ensure AudioContext is running
//   if (audioCtx.state === "suspended") {
//     await audioCtx.resume();
//   }

//   // Capture microphone input
//   const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//   console.log("Microphone stream captured:", stream);

//   // Create media source and analyser
//   const source = audioCtx.createMediaStreamSource(stream);
//   const analyserNode = audioCtx.createAnalyser();
//   analyserNode.fftSize = 2048;
//   source.connect(analyserNode);

//   // Process the viseme levels in real-time
//   const processAudio = () => {
//     const visemeLevels = calculateVisemeLevels(analyserNode);
//     processVisemeLevels(visemeLevels);

//     // Continue processing in the next frame
//     requestAnimationFrame(processAudio);
//   };

//   processAudio(); // Start processing audio data
//   return { audioCtx, stream, analyserNode };
// };
