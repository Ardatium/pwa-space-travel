import {astronomyAPI} from "boot/axios";

export function celestialSearch(term) {
    return astronomyAPI.get(`/search?term=${term}`, {
        headers: {
            'Authorization': `${process.env.ASTRONOMY_AUTH_TYPE} ${process.env.ASTRONOMY_AUTH_KEY}`
        }
    })
}
