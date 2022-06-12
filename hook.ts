import {useEffect, useState} from "react";

type Query = { query: string | false}

export const useMediaQuery = ({query}: Query): boolean => {
        let matchMedia
        if(query) {
            matchMedia = window.matchMedia(query)
        }
        const [isMatch, setIsMatch] = useState(query ? matchMedia.matches : true)

        useEffect(() => {
            if(!query){
                return
            }
            const mediaCallback = (e) => {
                e.matches ? setIsMatch(true) : setIsMatch(false)
            }
            matchMedia.addEventListener('change', mediaCallback)
            return () => matchMedia.removeEventListener('change', mediaCallback)
        }, [])
        return isMatch
}