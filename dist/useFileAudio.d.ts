export declare const useFileAudio: (activate: boolean) => {
    analyserNode: AnalyserNode | undefined;
    playWavFile: ((wavUrl: string) => Promise<void>) | undefined;
};
