import { ArcRotateCameraOptions, ModelBuilder, ModelPath } from '@mjt-engine/babs';
import { PhonemeLevels } from '../audio/calculateVisemeLevels';
import { Humanoid } from './Humanoid';
export declare const fromGltf: ({ path, canvas, cameraOptions, }: {
    path: ModelPath;
    canvas: HTMLCanvasElement;
    cameraOptions?: ArcRotateCameraOptions;
}) => Promise<Humanoid>;
export declare const updateGltfPhonemeLevels: ({ model, levels, }: {
    model: ModelBuilder;
    levels: PhonemeLevels;
}) => void;
