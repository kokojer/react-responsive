import React from "react";
declare type MediaFunctionsTypes = {
    children: React.ReactNode | ((matches: boolean) => React.ReactNode);
} & ({
    orientation: "landscape" | "portrait";
} | {
    minResolution: number | `${number}dppx`;
} | {
    maxResolution: number | `${number}dppx`;
} | {
    minWidth: number;
} | {
    maxWidth: number;
} | {
    minHeight: number;
} | {
    maxHeight: number;
});
export default function MediaQuery(props: MediaFunctionsTypes): any;
export {};
