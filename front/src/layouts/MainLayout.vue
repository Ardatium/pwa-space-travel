<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar class="bg-primary text-white">
                <q-btn
                    dense flat
                    icon="home"
                    round
                    @click="goHome()"
                />
                <q-avatar
                    @click="goHome()">
                    <img src="/images/space-logo.png">
                </q-avatar>

                <q-toolbar-title>Space Travel</q-toolbar-title>

                <q-btn
                    dense flat
                    icon="search"
                    label="Rechercher astres"
                    round
                    @click="goToSearch()"
                />
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script setup>

import {useRoute, useRouter} from 'vue-router';

const route = useRoute()
const router = useRouter()

function goToSearch() {
    console.log("Going to search")
    router.replace(`/search`)
}

function goHome() {
    console.log("Going home")
    router.replace(`/`)
}
</script>
