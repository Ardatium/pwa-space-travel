import {defineStore} from 'pinia';
import {
    createACelestial,
    getAllCelestials,
    getAllVisited,
    setCelestialPriority,
    setVisitDate,
    updateCelestial,
    updateVisitStatus
} from "src/services/celestialList";

export const useCelestialListStore = defineStore('celestial-list', {
    state: () => ({
        celestialList: [],
        visitedCelestialList: [],
        notVisitedCelestialList: []
    }),

    actions: {
        async loadAllCelestials() {
            try {
                const {data} = await getAllCelestials();
                await this.loadAllVisitedCelestials();
                await this.loadAllNotVisitedCelestials();
                this.celestialList = data
            } catch (error) {
                console.log(error)
            }
        },

        async loadAllVisitedCelestials() {
            try {
                const {data} = await getAllVisited(true);
                this.visitedCelestialList = data
            } catch (error) {
                console.log(error)
            }
        },

        async loadAllNotVisitedCelestials() {
            try {
                const {data} = await getAllVisited(false);
                this.notVisitedCelestialList = data
            } catch (error) {
                console.log(error)
            }
        },

        async handleCreateCelestial(astroId, visited, visitDate, priority) {
            try {
                await createACelestial(astroId, visited, visitDate, priority);
                await this.loadAllCelestials();
            } catch (error) {
                console.log(error)
            }
        },

        async handleUpdateCelestial(astroId, visited, visitDate, priority) {
            try {
                await updateCelestial(astroId, visited, visitDate, priority);
                await this.loadAllCelestials();
            } catch (error) {
                console.log(error)
            }
        },

        async handleUpdateVisitStatus(id, status) {
            try {
                await updateVisitStatus(id, status);
                if (status) {
                    await setVisitDate(id, Date.now())
                }
                await this.loadAllCelestials();
            } catch (error) {
                console.log(error)
            }
        },

        async handleSetCelestialPriority(astroId, priority) {
            try {
                await setCelestialPriority(astroId, priority);
                await this.loadAllCelestials();
            } catch (error) {
                console.log(error)
            }
        }
    }
})
