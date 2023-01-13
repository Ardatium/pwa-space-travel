<template>
    <!--    <div class="q-pa-md">-->
    <h3>Dashboard</h3>
    <div class="to-visit-title">
        <h5>Astres à visiter</h5>
    </div>
    <CelestialListComponent/>
    <!--    </div>-->
</template>

<script>
import CelestialListComponent from 'components/celestial-list/CelestialListComponent.vue'

export default {
    components: {
        CelestialListComponent
    }
}

const toVisitTile = "LET'S GO !!!"
</script>
