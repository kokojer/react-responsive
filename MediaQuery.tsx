import * as React from "react";
import {useMediaQuery} from "./hook.ts";
interface MediaFunctionsTypes {
    orientation?: 'landscape' | 'portrait',
    minResolution?: number | `${number}dppx`,
    maxResolution?: number | `${number}dppx`,
    minWidth?: number,
    maxWidth?: number,
    minHeight?: number,
    maxHeight?: number,
    children?: React.ReactNode | ((matches?: boolean) => React.ReactNode)
}

export default function MediaQuery(props:MediaFunctionsTypes){
    let orientation = useMediaQuery({query:props.orientation ? `(orientation: ${props.orientation})` : false})
    let minResolution = useMediaQuery({query:props.minResolution ? `(min-resolution: ${props.minResolution})` : false})
    let maxResolution = useMediaQuery({query:props.maxResolution ? `(max-resolution: ${props.maxResolution})` : false})
    let minWidth = useMediaQuery({query:props.minWidth ? `(min-width: ${props.minWidth}px)` : false})
    let maxWidth = useMediaQuery({query:props.maxWidth ? `(max-width: ${props.maxWidth}px)` : false})
    let minHeight = useMediaQuery({query:props.minHeight ? `(min-height: ${props.minHeight}px)` : false})
    let maxHeight = useMediaQuery({query:props.maxHeight ? `(max-height: ${props.maxHeight}px)` : false})
    let allConditions = orientation && minResolution && maxResolution && minWidth && maxWidth && minHeight && maxHeight

    return typeof props.children === 'function' ? (
        <>
            {props.children(allConditions)}
        </>
    ): allConditions && (
            <>
                {props.children}
            </>
        )
}