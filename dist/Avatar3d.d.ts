import { ArcRotateCameraOptions } from '@mjtdev/engine';
import { Humanoid } from './humanoid/gltf/Humanoid';
import { VrmCameraOptions } from './humanoid/vrm/createVrmScene';
export type Avatar3dRef = {
    getHumanoid: () => Humanoid | undefined;
};
export declare const Avatar3d: import('react').MemoExoticComponent<import('react').ForwardRefExoticComponent<Omit<{
    component?: React.ElementType;
} & import('@mui/system').StackBaseProps & {
    sx?: import('@mui/system').SxProps<import('@mui/system').Theme>;
} & import('@mui/system').SystemProps<import('@mui/system').Theme> & Omit<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('react').RefObject<HTMLDivElement> | null | undefined;
}, "sx" | ("position" | "color" | "maxHeight" | "overflow" | "p" | "border" | "boxShadow" | "fontWeight" | "zIndex" | "alignContent" | "alignItems" | "alignSelf" | "bottom" | "boxSizing" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "justifyContent" | "justifyItems" | "justifySelf" | "left" | "letterSpacing" | "lineHeight" | "marginBlockEnd" | "marginBlockStart" | "marginBottom" | "marginInlineEnd" | "marginInlineStart" | "marginLeft" | "marginRight" | "marginTop" | "maxWidth" | "minHeight" | "minWidth" | "order" | "paddingBlockEnd" | "paddingBlockStart" | "paddingBottom" | "paddingInlineEnd" | "paddingInlineStart" | "paddingLeft" | "paddingRight" | "paddingTop" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "top" | "visibility" | "whiteSpace" | "width" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "flex" | "gap" | "gridArea" | "gridColumn" | "gridRow" | "margin" | "marginBlock" | "marginInline" | "padding" | "paddingBlock" | "paddingInline" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "pt" | "pr" | "pb" | "pl" | "px" | "paddingX" | "py" | "paddingY" | "typography" | "displayPrint") | keyof import('@mui/system').StackBaseProps | "component"> & {
    path: string;
    showControls?: boolean;
    showPhonemes?: boolean;
    analyserNode?: AnalyserNode;
    canvasStyle?: React.CSSProperties;
    canvasWidth?: number;
    canvasHeight?: number;
    gltfCameraOptions?: ArcRotateCameraOptions;
    vrmCameraOptions?: VrmCameraOptions;
    animationPath?: string;
}, "ref"> & import('react').RefAttributes<Avatar3dRef>>>;
