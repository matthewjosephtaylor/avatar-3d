export const createAudioPlayer = () => {
  const audioCtx = new AudioContext();

  // Ensure the AudioContext is running (especially in browsers like Chrome)
  const ensureAudioContext = async () => {
    if (audioCtx.state === "suspended") {
      await audioCtx.resume();
      console.log("Audio context resumed after user gesture.");
    }
  };

  // Create the analyser node
  const analyserNode = audioCtx.createAnalyser();
  analyserNode.fftSize = 2048; // Adjust FFT size for frequency resolution

  // Method to load and play a wav file
  const playWavFile = async (wavUrl: string) => {
    await ensureAudioContext(); // Ensure context is running

    // Fetch and decode the WAV file
    const response = await fetch(wavUrl);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

    // Create a buffer source node and set the audio buffer
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;

    // Connect the source to the analyser node and the destination (speakers)
    source.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);

    // Start playing the audio
    source.start();

    console.log("WAV file is playing:", wavUrl);
  };

  // Return the analyzer and method to play a WAV file
  return {
    audioCtx,
    analyserNode,
    playWavFile,
  };
};
