import { VRM } from '@pixiv/three-vrm';
import { VrmState } from './vrmState';
import { PhonemeLevels } from '../audio/calculateVisemeLevels';
export declare const updateVrmAudio: ({ vrm, analyserNode, vrmState, levels, }: {
    vrm: VRM;
    analyserNode?: AnalyserNode;
    vrmState: VrmState;
    levels: PhonemeLevels;
}) => void;
