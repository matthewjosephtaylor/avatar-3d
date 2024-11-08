import { ArcRotateCameraOptions, ModelPath, Tick } from '@mjtdev/engine';
export type Humanoid = Awaited<ReturnType<typeof fromGltf>>;
export declare const fromGltf: ({ path, canvas, idleAnimationUrl, cameraOptions, }: {
    path: ModelPath;
    canvas: HTMLCanvasElement;
    idleAnimationUrl?: string;
    cameraOptions?: ArcRotateCameraOptions;
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
