import React from "react";
import { useMediaQuery } from "./hook";
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
> &
    {
        [K in Keys]-?: Required<Pick<T, K>> &
            Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

interface MediaFunctionsTypes {
    orientation: "landscape" | "portrait";
    minResolution: number | `${number}dppx`;
    maxResolution: number | `${number}dppx`;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
}

type MediaQueryProps = RequireAtLeastOne<MediaFunctionsTypes> & {
    children: React.ReactNode | ((matches: boolean) => React.ReactNode);
};

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

export default function MediaQuery(props: MediaQueryProps) {
    const generatorMediaQuery = (): string => {
        const entries = Object.entries(props);
        return entries
            .map(([key, value], index) => {
                if (key !== "children") {
                    if (index === 0) {
                        return `(${parsePropsKey(key)}: ${getUnit(
                            key,
                            value
                        )})`;
                    } else {
                        return ` and (${parsePropsKey(key)}: ${getUnit(
                            key,
                            value
                        )})`;
                    }
                } else {
                    return "";
                }
            })
            .join("");
    };

    const allConditions = useMediaQuery({ query: generatorMediaQuery() });

    return typeof props.children === "function" ? (
        <>{props.children(allConditions)}</>
    ) : allConditions ? (
        <>{props.children}</>
    ) : null;
}
