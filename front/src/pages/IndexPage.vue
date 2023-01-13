<template>
    <div class="q-pa-md">
        <h3>Dashboard</h3>

        <CelestialListComponent :myTitle="toVisitTitle"/>

    </div>
</template>

<script setup>
import CelestialListComponent from 'components/celestial-list/CelestialListComponent.vue'

const toVisitTitle = "LET'S GO !!!"
</script>
