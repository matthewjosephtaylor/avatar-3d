import { VRM } from '@pixiv/three-vrm';
export declare class VrmState {
    private vrm;
    private expressionGroups;
    expressionTimer: number;
    expressionDuration: number;
    transitionProgress: number;
    currentExpressionSet: Record<string, number>;
    targetExpressionSet: Record<string, number>;
    blinkTimer: number;
    blinkState: number;
    blinkDuration: number;
    nextBlinkTime: number;
    blinkLeftOffset: number;
    blinkRightOffset: number;
    constructor(vrm: VRM);
    private resetExpressions;
    pickNewExpressionSet(group?: keyof typeof this.expressionGroups): void;
    updateState(deltaSeconds: number): void;
    private updateExpressions;
    private updateBlink;
}
