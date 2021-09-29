<script setup lang='ts'>
  import { reactive } from 'vue'
  import {useStore} from 'vuex'
  const store = useStore()
  const {count} = store.state
    console.log(count);
  // console.log(store.);
  defineProps<{ msg?: string }>()

  



</script>

<template>
  <div>home</div>

</template>

<style scoped>

</style>