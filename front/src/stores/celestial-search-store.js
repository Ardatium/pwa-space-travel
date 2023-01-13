import {defineStore} from 'pinia';
import {celestialSearch} from "src/services/celestialSearch";
import {Notify} from "quasar";

export const useCelestialStore = defineStore('celestial-search', {
    state: () => ({
        celestialList: []
    }),

    actions: {
        async celestialSearch(term) {
            try {
                const {data} = await celestialSearch(term);
                this.celestialList = data
            } catch (error) {
                Notify.create({
                    message: "Error whilst searching celestial bodies",
                    type: "negative"
                });
            }
        }
    },
})
