import { Humanoid } from '../gltf/Humanoid';
import { VrmCameraOptions } from './createVrmScene';
export declare const fromVrm: ({ vrmUrl, canvas, idleAnimationUrl, cameraOptions, }: {
    vrmUrl: string;
    canvas: HTMLCanvasElement;
    cameraOptions?: VrmCameraOptions;
    idleAnimationUrl?: string;
}) => Promise<Humanoid>;
