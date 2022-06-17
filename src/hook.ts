import { useEffect, useState } from "react";

type Query = { query: string };

export const useMediaQuery = ({ query }: Query): boolean => {
    const matchMedia = window.matchMedia(query);
    const [isMatch, setIsMatch] = useState(null);
    useEffect(() => {
        setIsMatch(matchMedia.matches);
        const mediaCallback = (e: MediaQueryListEvent) => {
            e.matches ? setIsMatch(true) : setIsMatch(false);
        };
        matchMedia.addEventListener("change", mediaCallback);
        return () => matchMedia.removeEventListener("change", mediaCallback);
    }, [query]);
    return isMatch;
};
