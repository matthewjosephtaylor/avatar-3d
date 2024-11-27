export declare const Humanoids: {
    fromVrm: ({ vrmUrl, canvas, idleAnimationUrl, cameraOptions, }: {
        vrmUrl: string;
        canvas: HTMLCanvasElement;
        cameraOptions?: import('./vrm/createVrmScene').VrmCameraOptions;
        idleAnimationUrl?: string;
    }) => Promise<import('./gltf/Humanoid').Humanoid>;
    fromGltf: ({ path, canvas, cameraOptions, }: {
        path: import('@mjtdev/engine').ModelPath;
        canvas: HTMLCanvasElement;
        cameraOptions?: import('@mjtdev/engine').ArcRotateCameraOptions;
    }) => Promise<import('./gltf/Humanoid').Humanoid>;
};
