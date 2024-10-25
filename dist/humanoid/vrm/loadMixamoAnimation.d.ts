import { VRM } from '@pixiv/three-vrm';
import * as THREE from "three";
/**
 * Load Mixamo animation, convert for three-vrm use, and return it.
 *
 */
export declare function loadMixamoAnimation(url: string, vrm: VRM): Promise<THREE.AnimationClip>;
