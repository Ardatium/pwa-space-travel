import {astronomyAPI} from "boot/axios";

export function celestialSearch(term) {
    console.log(process.env.FOO)
    return astronomyAPI.get(`/search?term=${term}`, {
        headers: {
            'Authorization': `${process.env.ASTRONOMY_AUTH_TYPE} ${process.env.ASTRONOMY_AUTH_KEY}`
        }
    })
}
