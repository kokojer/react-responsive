import React from "react";
import { useMediaQuery } from "./hook";

type MediaFunctionsTypes = {
    children: React.ReactNode | ((matches: boolean) => React.ReactNode);
} & (
    | { orientation: "landscape" | "portrait" }
    | { minResolution: number | `${number}dppx` }
    | { maxResolution: number | `${number}dppx` }
    | { minWidth: number }
    | { maxWidth: number }
    | { minHeight: number }
    | { maxHeight: number }
);

function parsePropsKey(string: string) {
    return string.replace(/(?<=[a-z])(?=[A-Z])/g, "-").toLowerCase();
}

function getUnit(key: string, value: any) {
    if (/resolution/i.test(key)) {
        if (typeof value === "number") {
            return `${value}dppx`;
        } else {
            return value;
        }
    }
    if (/width/i.test(key) || /height/i.test(key)) {
        return `${value}px`;
    }
    return value;
}

export default function MediaQuery(props: MediaFunctionsTypes) {
    const generatorMediaQuery = (): string => {
        let mediaString = "";
        const entries = Object.entries(props);
        entries.forEach(([key, value]) => {
            if (key !== "children") {
                if (mediaString.length === 0) {
                    mediaString = `(${parsePropsKey(key)}: ${getUnit(
                        key,
                        value
                    )})`;
                } else {
                    mediaString += ` and (${parsePropsKey(key)}: ${getUnit(
                        key,
                        value
                    )})`;
                }
            }
        });
        return mediaString;
    };

    const allConditions = useMediaQuery({ query: generatorMediaQuery() });

    return typeof props.children === "function" ? (
        <>{props.children(allConditions)}</>
    ) : allConditions ? (
        <>{props.children}</>
    ) : null;
}
