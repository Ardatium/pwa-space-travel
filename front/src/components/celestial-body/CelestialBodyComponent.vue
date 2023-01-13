<template>
    <h3>COUCOU</h3>
    <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script>

export default {
    data() {
        return {
            count: 0
        }
    }
}
import {ref} from "vue";

const props = defineProps({
    myTitle: {
        type: String,
        default: ""
    }
})

const myTitle = ref(props.myTitle)

</script>
