import * as React from "react";
interface MediaFunctionsTypes {
    orientation?: "landscape" | "portrait";
    minResolution?: number | `${number}dppx`;
    maxResolution?: number | `${number}dppx`;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    children?: React.ReactNode | ((matches?: boolean) => React.ReactNode);
}
export default function MediaQuery(props: MediaFunctionsTypes): any;
export {};
