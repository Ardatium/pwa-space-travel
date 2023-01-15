<template>
  <div class="card">
    <div class="info">
      <div class="type">{{ type }}</div>
      <div class="name">{{ name }}</div>
    </div>
    <q-btn round color="primary" icon="rocket_launch" @click="addToVisit = true"></q-btn>
  </div>
  <q-dialog v-model="addToVisit">
    <CelestialItemDialog :name="name"/>
  </q-dialog>
  
</template>
<script>
import CelestialItemDialog from './dialog/CelestialItemDialog.vue';

export default {
    name: "CelestialItem",
    props: {
        type: {
            type: String,
            default: "default type"
        },
        name: {
            type: String,
            default: "default name"
        }
    },
    methods: {
        planToVisit(term) {
            console.log(`${term} : to visit`);
        }
    },
    components: { CelestialItemDialog },
    data () {
      return {
        addToVisit: false
      }
    }
}
</script>
<style>
  .card {
    margin: 10px;
    border: 1px solid #F5F5F5;
    background-color: #F5F5F5;
    padding: 10px;
    display: flex;
    border-radius: 10px
  }
  .card:hover {
    background-color: #DDDDDD;
  }
  .card .info {
    display: inherit;
    width: 90%;
    align-items: center;
  }
  .card .info .type {
    width: 40%;
  }
  .card .info .name {
    margin-left: 1em;
  }
  q-btn {
    margin-left: auto;
    float: right;
  }
</style>