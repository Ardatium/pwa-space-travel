<template>
  <div class="q-pa-md">
    <q-input v-model="term" label="Trouvez un astre" placeholder="Rechercher...">
      <template v-slot:append>
        <q-icon v-if="term !== ''" name="close" @click="term = ''" class="cursor-pointer" />
        <q-icon name="search" @click="searchCelestialBodies(term)"/>
      </template>
    </q-input>
    <CelestialItem v-for="(object, index) in result" :key="index" 
      :type=object.type.name :name=object.name></CelestialItem>
  </div>
</template>
  
<script setup>
  import CelestialItem from "components/search-page/CelestialItem.vue";
  import { useCelestialStore } from "src/stores/celestial-search-store";
  import { ref, computed } from "vue"

  const celestialStore = useCelestialStore();
  const result = computed(() => celestialStore.celestialList)

  function searchCelestialBodies(term) {
    celestialStore.celestialSearch(term)
  }
  
</script>
<style>
  q-input {
    margin:5px;
  }
</style>