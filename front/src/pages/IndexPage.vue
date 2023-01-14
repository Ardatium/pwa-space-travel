<template>
    <div class="q-pa-md">
        <h3>Dashboard</h3>

        <ListComponent :return-all="false" :title="toVisitTitle" :toVisit="true"/>

        <q-expansion-item
            class="shadow-1 overflow-hidden"
            expand-icon-class="text-white"
            header-class="bg-primary text-white"
            v-bind:label="visitedTitle"
        >
            <ListComponent :return-all="false" :toVisit="false"/>
        </q-expansion-item>


    </div>
</template>

<script setup>
import ListComponent from "components/dashboard/ListComponent";

const toVisitTitle = "Astres à visiter"
const visitedTitle = "Astres visités"
const allCelestialsTitle = "Tous les astres enregistrés"

</script>
