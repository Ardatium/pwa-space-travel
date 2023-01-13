import {defineStore} from 'pinia';
import {
    createACelestial,
    getAllCelestials,
    setCelestialPriority,
    setCelestialVisited,
    updateCelestial
} from "src/services/celestialList";

export const useCelestialListStore = defineStore('celestial-list', {
    state: () => ({
        celestialList: []
    }),

    actions: {
        async loadAllCelestials() {
            try {
                const {data} = await getAllCelestials();
                this.celestialList = data
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

        async handleSetCelestialVisited(astroId) {
            try {
                await setCelestialVisited(astroId);
                await this.loadAllCelestials();
            } catch (error) {
                console.log(error)
            }
        },

        async handleSetCelestialNotVisited(astroId) {
            try {
                await setCelestialNotVisited(astroId);
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
