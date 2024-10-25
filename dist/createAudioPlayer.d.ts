export declare const createAudioPlayer: () => {
    audioCtx: AudioContext;
    analyserNode: AnalyserNode;
    playWavFile: (wavUrl: string) => Promise<void>;
};
