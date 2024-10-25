import { OrthographicCamera, Scene, WebGLRenderer } from 'three';
export declare const createVrmScene: ({ canvas, vrmUrl, }: {
    canvas: HTMLCanvasElement;
    vrmUrl: string;
}) => Promise<{
    scene: Scene;
    vrm: import('@pixiv/three-vrm').VRM;
    camera: OrthographicCamera;
    renderer: WebGLRenderer;
}>;
