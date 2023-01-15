<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Ajouter à visiter</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div>Voulez vous ajouter {{ name }} dans les astres à visiter ?</div>
      <div> Avez vous déjà visité cet astre ?
        <input type="checkbox"
            v-model="visited"/>
      </div>
      <div> Selectionnez un niveau de priorité
        <select v-model="selected">
        <option v-for="n in 5" :key="n">{{ n }}</option>
    </select>
      </div>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn color="primary" @click="add(name, visited, selected)" v-close-popup> Ajouter à visiter</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import {useCelestialListStore} from "stores/celestial-list-store"
const store = useCelestialListStore();
export default {
  setup () {
    return {}
  },
  props: {
    name: {
      type: String,
      default: "default name"
    }
  },
  methods: {
    add(name, visited, priority) {
      store.handleCreateCelestial(name, visited, new Date(), priority)
    }
  }
}
</script>
