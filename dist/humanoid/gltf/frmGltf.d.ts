import { ModelPath, Tick } from '@mjtdev/engine';
export type Humanoid = Awaited<ReturnType<typeof fromGltf>>;
export declare const fromGltf: ({ path, canvas, idleAnimationUrl, }: {
    path: ModelPath;
    canvas: HTMLCanvasElement;
    idleAnimationUrl?: string;
}) => Promise<{
    destroy: () => void;
    model: import('@mjtdev/engine').ModelBuilder;
    update: ({ tick, analyserNode, }: {
        tick: Tick;
        analyserNode?: AnalyserNode;
    }) => void;
    toggleAudio: () => void;
    disableAudio: () => void;
    enableAudio: () => void;
    isAudioEnabled: () => boolean;
}>;
