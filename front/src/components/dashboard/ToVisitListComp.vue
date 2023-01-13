<template>
    <div class="q-pa-md">
        <h5>{{ title }}</h5>
        <div>
            {{ searchResult }}
        </div>
    </div>
</template>

<script setup>

import {useCelestialStore} from "stores/celestial-search-store";
import {computed} from "vue";

const props = defineProps({
    title: {
        type: String,
        default: "ComponentTitle"
    }
})

const title = "Astres à visiter"

const celestialSearchStore = useCelestialStore()
celestialSearchStore.celestialSearch("andromeda")
const searchResult = computed(() => celestialSearchStore.celestialList)

console.log(searchResult)

</script>
