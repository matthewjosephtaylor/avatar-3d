export declare const fromVrm: ({ vrmUrl, canvas, analyserNode, idleAnimationUrl, }: {
    vrmUrl: string;
    canvas: HTMLCanvasElement;
    analyserNode?: AnalyserNode;
    idleAnimationUrl?: string;
}) => Promise<{
    destroy: () => void;
    vrm: import('@pixiv/three-vrm').VRM;
    anim: import('@mjtdev/engine').AnimateState;
}>;
