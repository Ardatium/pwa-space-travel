<template>
  <div>My component</div>
  <div>{{ type }}</div>
  <div>{{ name }}</div>
</template>

<script>
import useCelestialStore from "stores/celestial-search-store"
export default {
  name: 'CelestialItem',
  props: {
    type: {
      type: String,
      default: 'default type'
    },
    name: {
      type: String,
      default: 'default name'
    }
  },
  planToVisit (term) {
    console.log(`${term} : to visit`)
  }
}
</script>
