<template>
  <q-page>
      <CelestialItem type="galaxy" name="andromeda"></CelestialItem>
  </q-page>
</template>
  
<script setup>
  import CelestialItem from "components/search-page/CelestialItem.vue"
  import { useCelestialStore } from "src/stores/celestial-search-store";


</script>
  