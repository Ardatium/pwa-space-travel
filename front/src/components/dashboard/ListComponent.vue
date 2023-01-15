<template>
    <div class="q-pa-md">
        <h5>{{ title }}</h5>
        <q-card
            v-for="(celestial, index) in celestials" :key="index"
            class="celestial-card"
            style="background: radial-gradient(circle, #ffffff  0%, #f0ebfc 100%)"
        >
            <q-card-section class="q-pt-none">
                <q-list>
                    <q-item>
                        <q-item-section>
                            <q-checkbox id="task-title-txt"
                                        v-model="celestial.visited"
                                        v-bind:label="celestial.astro_id"
                                        @click="celestialListStore.handleUpdateVisitStatus(celestial._id, celestial.visited)">
                            </q-checkbox>
                            <q-item-label caption lines="2">Dernière visite:
                                {{ date.formatDate(celestial.visit_date, 'DD MMM YYYY') }}
                            </q-item-label>
                        </q-item-section>
                    </q-item>


                </q-list>
                <q-card-actions>

                </q-card-actions>

            </q-card-section>

        </q-card>
    </div>
</template>

<style scoped>
.celestial-card {
    margin-bottom: 1em;
}
</style>

<script setup>

import {computed} from "vue";
import {useCelestialListStore} from "stores/celestial-list-store";
import {date} from 'quasar';

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    toVisit: {
        type: Boolean,
        default: true
    },
    returnAll: {
        type: Boolean,
        default: true
    }
})
// We get the store
const celestialListStore = useCelestialListStore()

// We load all type of celestials
celestialListStore.loadAllCelestials()
celestialListStore.loadAllVisitedCelestials()
celestialListStore.loadAllNotVisitedCelestials()

let celestials

if (props.returnAll) {
    celestials = computed(() => celestialListStore.celestialList)
} else if (props.toVisit) {
    celestials = computed(() => celestialListStore.notVisitedCelestialList)
} else {
    celestials = computed(() => celestialListStore.visitedCelestialList)
}

</script>
