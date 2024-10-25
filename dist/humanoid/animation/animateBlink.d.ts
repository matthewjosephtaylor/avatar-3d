export type EyeControls = {
    leftClosed: (value: number) => void;
    rightClosed: (value: number) => void;
    updateState: (updater: (current: Record<string, number>) => void) => void;
    getState: () => Record<string, number>;
};
export declare function animateBlink(controls: EyeControls, deltaSeconds: number): void;
