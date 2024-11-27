import { Point3 } from '@mjtdev/engine';
import { OrthographicCamera, Scene, WebGLRenderer } from 'three';
export type VrmCameraOptions = Partial<{
    position: Point3;
    lookAt: Point3;
    frustumSize: number;
}>;
export declare const createVrmScene: ({ canvas, vrmUrl, vrmCameraOptions, }: {
    canvas: HTMLCanvasElement;
    vrmUrl: string;
    vrmCameraOptions?: VrmCameraOptions;
}) => Promise<{
    scene: Scene;
    vrm: import('@pixiv/three-vrm').VRM;
    camera: OrthographicCamera;
    renderer: WebGLRenderer;
}>;
