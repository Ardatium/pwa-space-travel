<template>
    <div class="q-pa-md">
        <h5>{{ title }}</h5>
        <q-card
            v-for="(celestial, index) in celestials" :key="index"
            class="celestial-card"
            style="background: radial-gradient(circle, #ffffff  0%, #f0ebfc 100%)"
        >
            <q-expansion-item
                class="shadow-1 overflow-hidden"
                expand-icon-class="text-white"
                header-class="bg-primary text-white"
                v-bind:label="celestial.astro_id"
            >
                <q-card-section>
                    <div class="text-subtitle1">{{ celestial.visited }}</div>
                </q-card-section>

                <q-card-section>
                    <div class="text-subtitle1">{{ celestial.priority }}</div>
                </q-card-section>
            </q-expansion-item>
        </q-card>
    </div>
</template>

<script setup>

import {computed} from "vue";
import {useCelestialListStore} from "stores/celestial-list-store";

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
