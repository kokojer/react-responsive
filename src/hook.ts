import { useEffect, useState } from "react";

type Query = { query: string };

export const useMediaQuery = ({ query }: Query): boolean => {
    const [isMatch, setIsMatch] = useState(
        () => window.matchMedia(query).matches
    );
    useEffect(() => {
        const matchMedia = window.matchMedia(query);
        setIsMatch(matchMedia.matches);
        const mediaCallback = (e: MediaQueryListEvent) => {
            setIsMatch(e.matches);
        };
        matchMedia.addEventListener("change", mediaCallback);
        return () => {
            matchMedia.removeEventListener("change", mediaCallback);
        };
    }, [query]);
    return isMatch;
};
