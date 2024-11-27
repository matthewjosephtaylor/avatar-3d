import { ModelBuilder, Tick } from '@mjtdev/engine';
import { VRM } from '@pixiv/three-vrm/types/VRM';
import { PhonemeLevels } from '../audio/calculateVisemeLevels';
export type Humanoid = {
    destroy: () => void;
    gltfModel?: ModelBuilder;
    vrmModel?: VRM;
    updateTick: (params: {
        tick: Tick;
    }) => void;
    updatePhonemeLevels: (params: {
        analyserNode: AnalyserNode;
        phonemeLevels: PhonemeLevels;
    }) => void;
    setExpression: (expression: string, value?: number) => void;
    setAnimation: (animation: string) => void;
    getExpressions: () => string[];
};
