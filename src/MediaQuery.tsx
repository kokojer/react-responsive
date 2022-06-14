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
function MediaQuery(props: MediaFunctionsTypes) {
    const orientation = useMediaQuery({
        query: props.orientation
            ? `(orientation: ${props.orientation})`
            : false,
    });
    const minResolution = useMediaQuery({
        query: props.minResolution
            ? `(min-resolution: ${
                  typeof props.minResolution === "number"
                      ? `${props.minResolution}dppx`
                      : props.minResolution
              })`
            : false,
    });
    const maxResolution = useMediaQuery({
        query: props.maxResolution
            ? `(max-resolution: ${
                  typeof props.maxResolution === "number"
                      ? `${props.maxResolution}dppx`
                      : props.maxResolution
              })`
            : false,
    });
    const minWidth = useMediaQuery({
        query: props.minWidth ? `(min-width: ${props.minWidth}px)` : false,
    });
    const maxWidth = useMediaQuery({
        query: props.maxWidth ? `(max-width: ${props.maxWidth}px)` : false,
    });
    const minHeight = useMediaQuery({
        query: props.minHeight ? `(min-height: ${props.minHeight}px)` : false,
    });
    const maxHeight = useMediaQuery({
        query: props.maxHeight ? `(max-height: ${props.maxHeight}px)` : false,
    });
    const allConditions =
        orientation &&
        minResolution &&
        maxResolution &&
        minWidth &&
        maxWidth &&
        minHeight &&
        maxHeight;

    return typeof props.children === "function" ? (
        <>{props.children(allConditions)}</>
    ) : (
        allConditions && <>{props.children}</>
    );
}

export { MediaQuery as default, useMediaQuery };
