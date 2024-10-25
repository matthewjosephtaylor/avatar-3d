export declare const Humanoids: {
    fromVrm: ({ vrmUrl, canvas, analyserNode, idleAnimationUrl, }: {
        vrmUrl: string;
        canvas: HTMLCanvasElement;
        analyserNode?: AnalyserNode;
        idleAnimationUrl?: string;
    }) => Promise<{
        destroy: () => void;
        vrm: import('@pixiv/three-vrm').VRM;
        anim: import('@mjtdev/engine').AnimateState;
    }>;
    fromGltf: ({ path, canvas, idleAnimationUrl, }: {
        path: import('@mjtdev/engine').ModelPath;
        canvas: HTMLCanvasElement;
        idleAnimationUrl?: string;
    }) => Promise<{
        destroy: () => void;
        model: import('@mjtdev/engine').ModelBuilder;
        update: ({ tick, analyserNode, }: {
            tick: import('@mjtdev/engine').Tick;
            analyserNode?: AnalyserNode;
        }) => void;
        toggleAudio: () => void;
        disableAudio: () => void;
        enableAudio: () => void;
        isAudioEnabled: () => boolean;
    }>;
};
