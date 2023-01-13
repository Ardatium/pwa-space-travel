import {defineStore} from 'pinia';
import {celestialSearch} from "src/services/celestialSearch";
import {ref} from "vue";

export const useCelestialStore = defineStore('celestial-search', {
    state: () => ({
        celestialList: ref()
    }),

    actions: {
        async celestialSearch(term) {
            try {
                const {data} = await celestialSearch(term);
                this.celestialList = data
            } catch (error) {
                console.log(error)
            }
        }
    },
})
