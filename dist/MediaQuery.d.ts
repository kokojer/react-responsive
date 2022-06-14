import React from "react";
import { useMediaQuery } from "./hook";
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
declare function MediaQuery(props: MediaFunctionsTypes): any;
export { MediaQuery as default, useMediaQuery };
