import {storageAPI} from "boot/axios";

export function getAllCelestials() {
    return storageAPI.get(`/objects`)
}

export function getAllVisited(visited) {
    return storageAPI.get(`/objects/vi/${visited}`)
}

export function getAllWithPriority(priority) {
    return storageAPI.get(`/objects/vi/${priority}`)
}

export function createACelestial(astroId, visited, visitDate, priority) {
    return storageAPI.post(`/objects`, {
        astro_id: astroId,
        visited: visited,
        visit_date: visitDate,
        priority: priority
    })
}

export function updateCelestial(astroId, visited, visitDate, priority) {
    return storageAPI.put(`/objects/${astroId}`, {
        visited: visited,
        visit_date: visitDate,
        priority: priority
    })
}

export function setCelestialVisited(astroId) {
    return storageAPI.put(`/objects/${astroId}`, {
        visited: true
    })
}

export function setCelestialNotVisited(astroId) {
    return storageAPI.put(`/objects/${astroId}`, {
        visited: false
    })
}

export function setCelestialPriority(astroId, priority) {
    return storageAPI.put(`/objects/${astroId}`, {
        priority: priority
    })
}

export function setVisitDate(astroId, visitDate) {
    return storageAPI.put(`/objects/${astroId}`, {
        visit_date: visitDate
    })
}


