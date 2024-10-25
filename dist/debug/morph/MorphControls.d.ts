declare const MorphControls: ({ controls, defaultValues, onChange, analyserNode, }: {
    controls: Record<string, {
        min?: number;
        max?: number;
    }>;
    defaultValues?: Record<string, number>;
    onChange: (updatedValues: Record<string, number>) => void;
    analyserNode?: AnalyserNode;
}) => import("react/jsx-runtime").JSX.Element;
export default MorphControls;
