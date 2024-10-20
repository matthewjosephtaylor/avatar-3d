export const getMicAudio = async () => {
  const audioCtx = new AudioContext();
  // setAudioContext(audioCtx);

  // Ensure the AudioContext is running (especially in browsers like Chrome)
  if (audioCtx.state === "suspended") {
    await audioCtx.resume();
    console.log("Audio context resumed after user gesture.");
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  console.log("Audio stream captured from microphone:", stream);

  // Create MediaStreamSource and AnalyserNode
  const source = audioCtx.createMediaStreamSource(stream);
  const analyserNode = audioCtx.createAnalyser();
  analyserNode.fftSize = 2048; // Adjust FFT size for frequency resolution
  source.connect(analyserNode);

  analyserNode.minDecibels = -90; // Capture more detailed low-level audio
  analyserNode.maxDecibels = -10; // Adjust the dynamic range
  analyserNode.smoothingTimeConstant = 0.85; // Smoothens the data a bit for visual stability

  // setAnalyserNode(analyser); // Set the analyser node for further processing

  // Function to process audio data from the analyser
  // const processAudio = () => {
  //   if (!analyser) return;

  //   const dataArray = new Uint8Array(analyser.frequencyBinCount);
  //   analyser.getByteFrequencyData(dataArray);

  //   // Log a small portion of frequency data to verify it's working
  //   // console.log("Frequency data from analyser:", dataArray.slice(0, 10));

  //   requestAnimationFrame(processAudio); // Continue processing on the next frame
  // };

  // processAudio(); // Start processing the audio data
  return { audioCtx, stream, analyserNode };
};
