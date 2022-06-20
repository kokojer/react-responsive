import React from "react";
declare type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
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
declare type MediaQueryProps = RequireAtLeastOne<MediaFunctionsTypes> & {
    children: React.ReactNode | ((matches: boolean) => React.ReactNode);
};
export default function MediaQuery(props: MediaQueryProps): any;
export {};
