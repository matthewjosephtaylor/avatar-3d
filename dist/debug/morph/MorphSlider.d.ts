import { default as React } from 'react';
interface MorphSliderProps {
    name: string;
    value: number;
    min?: number;
    max?: number;
    onChange: (name: string, value: number) => void;
}
declare const MorphSlider: React.FC<MorphSliderProps>;
export default MorphSlider;
